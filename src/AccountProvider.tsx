import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { ConvexProvider, ConvexReactClient, useMutation, useQuery } from "convex/react"; // eslint-disable-line -- ConvexReactClient used below
import { ConvexAuthProvider, useAuthActions } from "@convex-dev/auth/react";
import { api } from "./convex/_generated/api";
import {
  loadProgress,
  mergeProgress,
  resetLocalProgress,
  saveProgress,
  subscribeProgress,
  type Progress,
} from "./lib/progress";

export type SyncState = "idle" | "syncing" | "synced" | "error";

/** Minimal user shape the UI needs — no vendor types leak into components. */
export type AccountUser = { displayName: string; email: string };

type AccountCtx = {
  user: AccountUser | null;
  /** False until the initial auth state is known (or cloud isn't set up). */
  authReady: boolean;
  /** False when no Convex URL is configured — /auth explains it. */
  cloudReady: boolean;
  sync: SyncState;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (name: string, email: string, password: string) => Promise<void>;
  signOutUser: () => Promise<void>;
  /** Wipe local progress AND the signed-in account's cloud progress. */
  resetEverything: () => Promise<void>;
};

const Ctx = createContext<AccountCtx | null>(null);

function friendlyError(err: unknown): string {
  const msg = err instanceof Error ? err.message : String(err ?? "");
  if (/invalid/i.test(msg) && /credential|password|email/i.test(msg))
    return "Wrong email or password.";
  if (/already exists|already registered/i.test(msg))
    return "That email already has an account — sign in instead.";
  if (/weak/i.test(msg)) return "Password too weak — use at least 8 characters.";
  if (/rate limit|too many/i.test(msg))
    return "Too many attempts — wait a minute and retry.";
  if (/fetch|network|Failed to fetch|WebSocket/i.test(msg))
    return "Can't reach the sync server right now — try again shortly.";
  return msg || "Something went wrong — try again.";
}

/* ------------------------------------------------------------------ */
/* Local-only mode (no VITE_CONVEX_URL on this deployment)              */
/* ------------------------------------------------------------------ */

const NOT_CONFIGURED =
  "Sign-in isn't configured on this deployment — progress saves in this browser.";

function useLocalOnlyValue(): AccountCtx {
  return useMemo(
    () => ({
      user: null,
      authReady: true,
      cloudReady: false,
      sync: "idle" as SyncState,
      signIn: async () => {
        throw new Error(NOT_CONFIGURED);
      },
      signUp: async () => {
        throw new Error(NOT_CONFIGURED);
      },
      signOutUser: async () => {},
      resetEverything: async () => resetLocalProgress(),
    }),
    []
  );
}

/* ------------------------------------------------------------------ */
/* Cloud mode (Convex Auth)                                            */
/* ------------------------------------------------------------------ */

function ConvexAccount({ children }: { children: ReactNode }) {
  const act = useAuthActions();
  const me = useQuery(api.users.me); // undefined=loading · null=signed out
  const cloud = useQuery(api.progress.get);
  const saveRow = useMutation(api.progress.save);
  const wipeRow = useMutation(api.progress.wipe);

  const [timedOut, setTimedOut] = useState(false);
  const [sync, setSync] = useState<SyncState>("idle");
  const lastPulled = useRef("");
  const lastPushed = useRef("");
  const pushTimer = useRef<number | null>(null);

  const signedIn = me != null;
  const authReady = cloud !== undefined || timedOut;

  // If the backend is unreachable, don't hide the sign-in button forever.
  useEffect(() => {
    const t = window.setTimeout(() => setTimedOut(true), 4000);
    return () => window.clearTimeout(t);
  }, []);

  /* Pull: merge cloud progress into local whenever the cloud row changes. */
  useEffect(() => {
    if (!cloud) return;
    const serial = JSON.stringify(cloud);
    if (serial === lastPulled.current) return;
    lastPulled.current = serial;
    const local = loadProgress().completed;
    const merged = mergeProgress({ completed: local } as Progress, {
      completed: cloud as Progress["completed"],
    } as Progress);
    const mergedSerial = JSON.stringify(merged.completed);
    if (mergedSerial !== JSON.stringify(local)) saveProgress(merged);
    lastPushed.current = mergedSerial; // the union is already on the server
  }, [cloud]);

  /* Push: local progress changes while signed in → debounce-save to cloud. */
  useEffect(() => {
    if (!signedIn) return;
    const unsub = subscribeProgress(() => {
      const serial = JSON.stringify(loadProgress().completed);
      if (serial === lastPushed.current) return;
      lastPushed.current = serial;
      setSync("syncing");
      if (pushTimer.current) window.clearTimeout(pushTimer.current);
      pushTimer.current = window.setTimeout(() => {
        saveRow({ data: loadProgress().completed })
          .then(() => setSync("synced"))
          .catch(() => setSync("error"));
      }, 600);
    });
    return () => {
      unsub();
      if (pushTimer.current) window.clearTimeout(pushTimer.current);
    };
  }, [signedIn, saveRow]);

  const signIn = useCallback(
    async (email: string, password: string) => {
      try {
        await act.signIn("password", { email, password, flow: "signIn" });
      } catch (err) {
        throw new Error(friendlyError(err));
      }
    },
    [act]
  );

  const signUp = useCallback(
    async (name: string, email: string, password: string) => {
      try {
        await act.signIn("password", { name, email, password, flow: "signUp" });
      } catch (err) {
        throw new Error(friendlyError(err));
      }
    },
    [act]
  );

  const signOutUser = useCallback(async () => {
    await act.signOut();
    lastPulled.current = "";
    lastPushed.current = "";
    setSync("idle");
  }, [act]);

  const resetEverything = useCallback(async () => {
    resetLocalProgress();
    lastPushed.current = "";
    if (signedIn) {
      try {
        await wipeRow({});
      } catch {
        setSync("error");
        return;
      }
      setSync("synced");
    }
  }, [signedIn, wipeRow]);

  const value = useMemo<AccountCtx>(
    () => ({
      user: me ? { displayName: me.name, email: me.email } : null,
      authReady,
      cloudReady: true,
      sync,
      signIn,
      signUp,
      signOutUser,
      resetEverything,
    }),
    [me, authReady, sync, signIn, signUp, signOutUser, resetEverything]
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

/* ------------------------------------------------------------------ */
/* Provider shell — picks cloud or local-only mode from the env        */
/* ------------------------------------------------------------------ */

export function AccountProvider({ children }: { children: ReactNode }) {
  const convexUrl = import.meta.env.VITE_CONVEX_URL as string | undefined;
  const client = useMemo(() => (convexUrl ? new ConvexReactClient(convexUrl) : null), [convexUrl]);

  if (!client) {
    return <Ctx.Provider value={useLocalOnlyValue()}>{children}</Ctx.Provider>;
  }
  return (
    <ConvexProvider client={client}>
      <ConvexAuthProvider client={client}>
        <ConvexAccount>{children}</ConvexAccount>
      </ConvexAuthProvider>
    </ConvexProvider>
  );
}

export function useAccount(): AccountCtx {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useAccount must be used inside <AccountProvider>");
  return ctx;
}
