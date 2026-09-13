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
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  type User,
} from "firebase/auth";
import { get, ref, remove, set } from "firebase/database";
import { firebaseReady, getFirebase } from "./lib/firebase";
import {
  EMPTY_PROGRESS,
  loadProgress,
  mergeProgress,
  resetLocalProgress,
  saveProgress,
  subscribeProgress,
  type Progress,
} from "./lib/progress";

export type SyncState = "idle" | "syncing" | "synced" | "error";

type AccountCtx = {
  user: User | null;
  /** False until the initial auth state is known (or Firebase isn't set up). */
  authReady: boolean;
  /** False when the VITE_FIREBASE_* env keys are missing — auth UI hides itself. */
  cloudReady: boolean;
  sync: SyncState;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (name: string, email: string, password: string) => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  signOutUser: () => Promise<void>;
  /** Wipe local progress AND the signed-in account's cloud progress. */
  resetEverything: () => Promise<void>;
};

const Ctx = createContext<AccountCtx | null>(null);

function friendlyError(err: unknown): string {
  const code = (err as { code?: string })?.code ?? "";
  switch (code) {
    case "auth/invalid-email":
      return "That email address doesn't look right.";
    case "auth/user-not-found":
      return "No account with that email yet — create one below.";
    case "auth/wrong-password":
      return "Wrong password — try again or reset it.";
    case "auth/invalid-credential":
      return "Wrong email or password.";
    case "auth/email-already-in-use":
      return "That email already has an account — sign in instead.";
    case "auth/weak-password":
      return "Password too weak — use at least 6 characters.";
    case "auth/too-many-requests":
      return "Too many attempts — wait a minute and retry.";
    case "auth/network-request-failed":
      return "Network error — check your connection.";
    case "auth/operation-not-allowed":
      return "Email sign-in isn't enabled for this Firebase project yet.";
    default:
      return err instanceof Error ? err.message : "Something went wrong — try again.";
  }
}

export function AccountProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [authReady, setAuthReady] = useState(!firebaseReady);
  const [sync, setSync] = useState<SyncState>("idle");
  const pushTimer = useRef<number | null>(null);
  const lastPushed = useRef<string>("");

  /* Auth listener. On sign-in: pull cloud progress, merge with local, push the union. */
  useEffect(() => {
    const fb = getFirebase();
    if (!fb) return;
    return onAuthStateChanged(fb.auth, (u) => {
      setUser(u);
      setAuthReady(true);
      lastPushed.current = "";
      if (!u) {
        setSync("idle");
        return;
      }
      setSync("syncing");
      get(ref(fb.db, `users/${u.uid}/progress`))
        .then((snap) => {
          const cloud: Progress = (snap.val() as Progress | null) ?? EMPTY_PROGRESS;
          const merged = mergeProgress(loadProgress(), cloud);
          saveProgress(merged); // notifies every subscriber
          lastPushed.current = JSON.stringify(merged.completed);
          return set(ref(fb.db, `users/${u.uid}/progress`), merged.completed);
        })
        .then(() => setSync("synced"))
        .catch(() => setSync("error"));
    });
  }, []);

  /* Local progress changes while signed in → debounce-push to the cloud. */
  useEffect(() => {
    const fb = getFirebase();
    if (!user || !fb) return;
    const unsub = subscribeProgress(() => {
      const serial = JSON.stringify(loadProgress().completed);
      if (serial === lastPushed.current) return;
      lastPushed.current = serial;
      setSync("syncing");
      if (pushTimer.current) window.clearTimeout(pushTimer.current);
      pushTimer.current = window.setTimeout(() => {
        set(ref(fb.db, `users/${user.uid}/progress`), loadProgress().completed)
          .then(() => setSync("synced"))
          .catch(() => setSync("error"));
      }, 600);
    });
    return () => {
      unsub();
      if (pushTimer.current) window.clearTimeout(pushTimer.current);
    };
  }, [user]);

  const signIn = useCallback(async (email: string, password: string) => {
    const fb = getFirebase();
    if (!fb) throw new Error("Sign-in isn't configured yet — missing VITE_FIREBASE_* keys.");
    try {
      await signInWithEmailAndPassword(fb.auth, email, password);
    } catch (err) {
      throw new Error(friendlyError(err));
    }
  }, []);

  const signUp = useCallback(async (name: string, email: string, password: string) => {
    const fb = getFirebase();
    if (!fb) throw new Error("Sign-in isn't configured yet — missing VITE_FIREBASE_* keys.");
    try {
      const cred = await createUserWithEmailAndPassword(fb.auth, email, password);
      if (name) await updateProfile(cred.user, { displayName: name });
    } catch (err) {
      throw new Error(friendlyError(err));
    }
  }, []);

  const resetPassword = useCallback(async (email: string) => {
    const fb = getFirebase();
    if (!fb) throw new Error("Sign-in isn't configured yet — missing VITE_FIREBASE_* keys.");
    try {
      await sendPasswordResetEmail(fb.auth, email);
    } catch (err) {
      throw new Error(friendlyError(err));
    }
  }, []);

  const signOutUser = useCallback(async () => {
    const fb = getFirebase();
    if (fb) await signOut(fb.auth);
  }, []);

  const resetEverything = useCallback(async () => {
    resetLocalProgress();
    lastPushed.current = "";
    const fb = getFirebase();
    if (fb && user) {
      try {
        await remove(ref(fb.db, `users/${user.uid}/progress`));
      } catch {
        setSync("error");
        return;
      }
    }
    setSync(user ? "synced" : "idle");
  }, [user]);

  const value = useMemo<AccountCtx>(
    () => ({
      user,
      authReady,
      cloudReady: firebaseReady,
      sync,
      signIn,
      signUp,
      resetPassword,
      signOutUser,
      resetEverything,
    }),
    [user, authReady, sync, signIn, signUp, resetPassword, signOutUser, resetEverything]
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useAccount(): AccountCtx {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useAccount must be used inside <AccountProvider>");
  return ctx;
}
