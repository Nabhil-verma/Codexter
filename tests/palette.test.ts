import { readFileSync, readdirSync } from "node:fs";
import { describe, expect, it } from "vitest";

/*
 * Silent styling bugs.
 *
 * A Tailwind class naming a shade that doesn't exist — `bg-ink-100` before
 * `--ink-100` was defined — compiles to no CSS at all. Nothing warns, nothing
 * errors, the element just renders unstyled: the call-stack pills in the trace
 * visualizer, the heatmap's empty cells and the locked skill nodes were all
 * invisible because of it. This test walks every colour token the app uses and
 * insists it is both declared in `src/index.css` and mapped in the Tailwind
 * config, which is the only place that can fail loudly instead.
 */

const SHADE = /^(paper|ink|gold)-(50|100|150|200|250|300|350|400|450|500|550|600|650|700|750|800|850|900|950)$/;
const TOKEN = /\b(paper|ink|gold)-(50|100|150|200|250|300|350|400|450|500|550|600|650|700|750|800|850|900|950)\b/g;
/** Every opacity modifier the app uses must sit on Tailwind's scale. */
const OPACITY = /\b(paper|ink|gold)-(50|100|150|200|250|300|350|400|450|500|550|600|650|700|750|800|850|900|950)\/(\d{1,3})\b/g;

function sourceFiles(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) =>
    entry.isDirectory()
      ? sourceFiles(`${dir}/${entry.name}`)
      : /\.tsx?$/.test(entry.name)
        ? [`${dir}/${entry.name}`]
        : []
  );
}

function usedTokens(): Map<string, string[]> {
  const used = new Map<string, string[]>();
  for (const file of sourceFiles("src")) {
    for (const match of readFileSync(file, "utf8").matchAll(TOKEN)) {
      const token = `${match[1]}-${match[2]}`;
      used.set(token, [...(used.get(token) ?? []), file]);
    }
  }
  return used;
}

describe("the colour palette", () => {
  const used = usedTokens();
  const css = readFileSync("src/index.css", "utf8");
  const config = readFileSync("tailwind.config.js", "utf8");

  it("is actually used by the app (guards against a vacuous pass)", () => {
    expect(used.size).toBeGreaterThan(10);
    expect(used.has("ink-950")).toBe(true);
  });

  it("declares a CSS variable for every colour token the source uses", () => {
    const missing = [...used.keys()].filter(
      (token) => !new RegExp(`--${token}\\s*:`).test(css)
    );
    expect(missing, `no CSS variable declared for: ${missing.join(", ")}`).toEqual([]);
  });

  it("maps every colour token the source uses in the Tailwind config", () => {
    const missing = [...used.keys()].filter((token) => {
      const [family, shade] = token.split("-");
      return !new RegExp(
        `\\b${shade}:\\s*"rgb\\(var\\(--${family}-${shade}\\)`
      ).test(config);
    });
    expect(
      missing,
      `declared in CSS but never mapped for Tailwind: ${missing.join(", ")}`
    ).toEqual([]);
  });

  it("uses only opacity modifiers Tailwind's scale generates", () => {
    // `bg-gold-400/12` and `bg-gold-400/8` compiled to nothing at all, so two
    // highlights simply never rendered. Tailwind only emits steps of five.
    const offenders: string[] = [];
    for (const file of sourceFiles("src")) {
      for (const match of readFileSync(file, "utf8").matchAll(OPACITY)) {
        const [, family, shade, opacity] = match;
        if (Number(opacity) > 100 || Number(opacity) % 5 !== 0) {
          offenders.push(`${family}-${shade}/${opacity} in ${file}`);
        }
      }
    }
    expect(offenders, offenders.join(", ")).toEqual([]);
  });

  it("defines both themes for every token (light and dark are one swap)", () => {
    const light = css.slice(css.indexOf(":root {"), css.indexOf(".dark {"));
    const dark = css.slice(css.indexOf(".dark {"), css.indexOf("html {"));
    const missingDark = [...used.keys()].filter(
      (token) => SHADE.test(token) && /--[a-z0-9-]+:/.test(light) && !new RegExp(`--${token}\\s*:`).test(dark)
    );
    expect(
      missingDark,
      `no dark-mode value for: ${missingDark.join(", ")}`
    ).toEqual([]);
  });
});
