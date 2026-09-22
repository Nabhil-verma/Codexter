/**
 * Convex wraps thrown mutation errors ("Uncaught Error: <message> [v3])").
 * Surface just the human part — shared by every panel that mutates.
 */
export function friendly(err: unknown): string {
  const raw = err instanceof Error ? err.message : String(err ?? "");
  const m = raw.match(/Uncaught Error:\s*([^\n]+)/);
  const text = (m ? m[1] : raw.split("\n").pop() ?? raw).trim();
  return text || "Something went wrong — try again.";
}
