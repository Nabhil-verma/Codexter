export type RunResult = {
  logs: string[];
  error: string | null;
};

/**
 * Runs user JavaScript with console captured, an infinite-loop guard,
 * full async support (timers/promises awaited before returning), and a
 * mock REST server mounted on `fetch` for the API lessons.
 */
export async function runUserCode(code: string, timeoutMs = 4000): Promise<RunResult> {
  const logs: string[] = [];
  const push = (...args: unknown[]) => {
    logs.push(
      args
        .map((a) => {
          if (typeof a === "string") return a;
          try {
            return JSON.stringify(a, null, 2) ?? String(a);
          } catch {
            return String(a);
          }
        })
        .join(" ")
    );
    if (logs.length > 500) throw new Error("Output limit reached (500 lines max)");
  };

  const pending: Promise<unknown>[] = [];

  // Loop guard: time check inside every loop body
  const deadline = Date.now() + timeoutMs;
  const tick = () => {
    if (Date.now() > deadline) {
      throw new Error("Script took too long — possible infinite loop!");
    }
  };
  const guarded = code.replace(
    /\b(for|while)\s*\(/g,
    (_m, kw: string) => "__tick__();" + kw + "("
  );

  const fakeConsole = { log: push, error: push, warn: push, info: push };

  const sandboxFetch = makeMockFetch(push);

  const err = await (async () => {
    try {
      const fn = new Function(
        "console",
        "__tick__",
        "fetch",
        "setTimeout",
        "setInterval",
        "PromiseLib",
        `"use strict";\n${guarded}`
      );
      const task = fn(
        fakeConsole,
        tick,
        sandboxFetch,
        trackedTimeout(pending),
        undefined,
        Promise
      );
      if (task && typeof (task as Promise<unknown>).then === "function") {
        pending.push(task as Promise<unknown>);
      }
      // Wait for the entry task + everything it spawned
      while (pending.length) {
        await Promise.all(pending.splice(0));
      }
      return null;
    } catch (e) {
      return e instanceof Error ? e.message : String(e);
    }
  })();

  return { logs, error: err };
}

function trackedTimeout(pending: Promise<unknown>[]) {
  return (cb: (...args: unknown[]) => void, ms: number, ...rest: unknown[]) => {
    const p = new Promise<void>((resolve) => {
      realSetTimeout(() => {
        cb(...rest);
        resolve();
      }, Math.min(ms, 3000));
    });
    pending.push(p);
  };
}

const realSetTimeout = setTimeout.bind(globalThis);

/* ------------------------------------------------------------------ */
/* Mock REST server: /api/users CRUD + flaky endpoint                  */
/* ------------------------------------------------------------------ */

type MockUser = { id: number; name: string; role?: string };

const serverState = { nextId: 4, users: [
  { id: 1, name: "Ada", role: "engineer" },
  { id: 2, name: "Lin", role: "designer" },
  { id: 3, name: "Sam", role: "manager" },
] as MockUser[] };

const latency = () => new Promise<void>((r) => realSetTimeout(r, 40 + Math.random() * 60));

function jsonRes(body: unknown, status = 200) {
  return {
    ok: status >= 200 && status < 300,
    status,
    statusText: String(status),
    json: async () => body,
    text: async () => JSON.stringify(body),
  };
}

async function makeMockFetch(log: (...a: unknown[]) => void) {
  return async (url: string, opts?: { method?: string; body?: string }) => {
    await latency();
    const method = (opts?.method ?? "GET").toUpperCase();
    const path = url.replace(/^https?:\/\/[^/]+/, "");
    const users = serverState.users;

    let m: RegExpMatchArray | null;
    if ((m = path.match(/^\/api\/flaky\/?$/))) {
      if (Math.random() < 0.5) return jsonRes({ error: "random outage" }, 503);
      return jsonRes({ message: "ok", at: Date.now() });
    }

    if ((m = path.match(/^\/api\/users\/?$/))) {
      if (method === "GET") return jsonRes(users);
      if (method === "POST") {
        let body: Partial<MockUser> = {};
        try {
          body = JSON.parse(opts?.body ?? "{}");
        } catch {
          return jsonRes({ error: "invalid JSON body" }, 400);
        }
        if (!body.name) return jsonRes({ error: "name is required" }, 400);
        const user: MockUser = { id: serverState.nextId++, name: body.name, role: body.role ?? "member" };
        users.push(user);
        return jsonRes(user, 201);
      }
      return jsonRes({ error: "method not allowed" }, 405);
    }

    if ((m = path.match(/^\/api\/users\/(\d+)\/?$/))) {
      const id = Number(m[1]);
      const idx = users.findIndex((u) => u.id === id);
      if (idx === -1) return jsonRes({ error: "user not found" }, 404);
      if (method === "GET") return jsonRes(users[idx]);
      if (method === "DELETE") {
        const [removed] = users.splice(idx, 1);
        return jsonRes({ deleted: removed }, 200);
      }
      if (method === "PATCH" || method === "PUT") {
        Object.assign(users[idx], JSON.parse(opts?.body ?? "{}"));
        return jsonRes(users[idx]);
      }
      return jsonRes({ error: "method not allowed" }, 405);
    }

    log("(mock server) no route for", method, path);
    return jsonRes({ error: "not found" }, 404);
  };
}

export function evaluateCheck(expr: string, output: string): boolean {
  try {
    // eslint-disable-next-line no-new-func
    const fn = new Function("output", `"use strict"; return (${expr});`);
    return Boolean(fn(output));
  } catch {
    return false;
  }
}
