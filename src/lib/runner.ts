export type RunResult = {
  logs: string[];
  error: string | null;
};

/**
 * Runs user JavaScript in the page with console.log captured.
 * Execution is timeboxed with a loop-guard transform to avoid infinite loops freezing the tab.
 */
export function runUserCode(code: string, timeoutMs = 1500): RunResult {
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
    if (logs.length > 500) {
      logs.push("… output truncated (500 lines max)");
      throw new Error("Output limit reached");
    }
  };

  // Insert a time check inside every loop so infinite loops throw instead of freezing.
  let deadline = Date.now() + timeoutMs;
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
  const err = (() => {
    try {
      // eslint-disable-next-line no-new-func
      const fn = new Function(
        "console",
        "__tick__",
        `"use strict";\n${guarded}`
      );
      fn(fakeConsole, tick);
      return null;
    } catch (e) {
      return e instanceof Error ? e.message : String(e);
    }
  })();

  return { logs, error: err };
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
