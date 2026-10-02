import type { DiffExercise } from "./types";

/* ═══════════════════════════════════════════════════════════════
   The multi-file review library (V2.1 Fix 2).

   Every exercise is an agent-authored pull request with exactly one
   planted blocking defect and ≥2 distractors — correct-looking
   changes that are NOT blockers, with at least one of them in the
   same file as the defect so file-level heuristics can't win.
   Grading is the deterministic ladder in src/lib/labGrade.ts.
   ═══════════════════════════════════════════════════════════════ */

export const DIFF_CHALLENGES: DiffExercise[] = [
  {
    id: "agent-pr-search-race",
    title: "The PR That Lost Its Guard",
    brief:
      "Add debounced product search to the navbar — closes #482. Tested locally, feels much snappier.",
    files: [
      {
        path: "src/hooks/useProductSearch.ts",
        before: `import { useEffect, useState } from "react";
import { searchProducts, type Product } from "../lib/searchCache";

export function useProductSearch(query: string) {
  const [results, setResults] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }
    let cancelled = false;
    setLoading(true);
    searchProducts(query).then((products) => {
      if (cancelled) return;
      setResults(products);
      setLoading(false);
    });
    return () => {
      cancelled = true;
    };
  }, [query]);

  return { results, loading };
}`,
        after: `import { useEffect, useState } from "react";
import { searchProducts, type Product } from "../lib/searchCache";
import { useDebounced } from "../lib/debounce";

export function useProductSearch(query: string) {
  const debounced = useDebounced(query, 250);
  const [results, setResults] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!debounced) {
      setResults([]);
      return;
    }
    setLoading(true);
    console.log("[search]", debounced);
    searchProducts(debounced).then((products) => {
      setResults(products);
      setLoading(false);
    });
  }, [debounced]);

  return { results, loading };
}`,
      },
      {
        path: "src/lib/debounce.ts",
        after: `import { useEffect, useState } from "react";

/** Returns \`value\` only after it has stopped changing for \`delay\` ms. */
export function useDebounced<T>(value: T, delay: number): T {
  const [settled, setSettled] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setSettled(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return settled;
}

/** Plain function form, for non-React call sites. */
export function debounce<A extends unknown[]>(fn: (...args: A) => void, delay: number) {
  let timer: ReturnType<typeof setTimeout> | null = null;
  return (...args: A) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}`,
      },
      {
        path: "src/components/SearchBox.tsx",
        before: `import { useState } from "react";
import { useProductSearch } from "../hooks/useProductSearch";

export function SearchBox() {
  const [query, setQuery] = useState("");
  const { results, loading } = useProductSearch(query);

  return (
    <div className="search-box">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search products…"
      />
      {loading && <span className="search-box__hint">searching…</span>}
      <ul className="search-box__results">
        {results.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}`,
        after: `import { useState } from "react";
import { useProductSearch } from "../hooks/useProductSearch";

export function SearchBox() {
  const [query, setQuery] = useState("");
  const { results, loading } = useProductSearch(query);

  return (
    <div className="search-box">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search products…"
        aria-label="Search products"
      />
      {loading && <span className="search-box__hint">searching…</span>}
      <ul className="search-box__results">
        {results.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}`,
      },
      {
        path: "src/lib/searchCache.ts",
        before: `export type Product = { id: number; name: string; priceCents: number };

/** Simulated search endpoint: variable latency, deterministic per query. */
export async function searchProducts(query: string): Promise<Product[]> {
  const latency = 40 + (query.length % 3) * 60;
  await new Promise((resolve) => setTimeout(resolve, latency));

  return [
    { id: 1, name: query + " tote", priceCents: 1800 },
    { id: 2, name: query + " mug", priceCents: 1200 },
  ];
}`,
        after: `export type Product = { id: number; name: string; priceCents: number };

const CACHE_TTL_MS = 30_000;
const cache = new Map<string, { at: number; items: Product[] }>();

/** Simulated search endpoint: variable latency, deterministic per query. */
export async function searchProducts(query: string): Promise<Product[]> {
  const hit = cache.get(query);
  if (hit && Date.now() - hit.at < CACHE_TTL_MS) return hit.items;

  const latency = 40 + (query.length % 3) * 60;
  await new Promise((resolve) => setTimeout(resolve, latency));

  const items = [
    { id: 1, name: query + " tote", priceCents: 1800 },
    { id: 2, name: query + " mug", priceCents: 1200 },
  ];
  cache.set(query, { at: Date.now(), items });
  return items;
}`,
      },
      {
        path: "package.json",
        before: `{
  "name": "shop-ui",
  "dependencies": {
    "react": "^18.3.1"
  },
  "devDependencies": {
    "@types/react": "^18.3.12",
    "typescript": "^5.6.3",
    "vite": "^5.4.10"
  }
}`,
        after: `{
  "name": "shop-ui",
  "dependencies": {
    "react": "^18.3.1"
  },
  "devDependencies": {
    "@types/react": "^18.3.12",
    "typescript": "^5.6.3",
    "vite": "^5.4.11"
  }
}`,
      },
    ],
    planted: {
      file: "src/hooks/useProductSearch.ts",
      line: 17,
      category: "RC",
      why: "The refactor replaced the cancelled-flag cleanup with a debounce but dropped the staleness guard. When two searches are in flight and the older response lands last, it overwrites the newer one — the UI shows results for text the user has already moved past. Keep a request id (or an AbortController) and ignore every response that isn't the newest.",
    },
    distractors: [
      "The console.log left in src/hooks/useProductSearch.ts — noisy, but it logs the query the user typed, not anything private. A nit, not a blocker.",
      "The vite patch bump in package.json — unrelated housekeeping, but harmless and correct.",
      "The aria-label added in src/components/SearchBox.tsx — accessibility polish the PR mentions; correct.",
    ],
    hints: [
      {
        tier: 1,
        text: "Two quick searches can finish out of order. Which line lets an older response become state?",
      },
      {
        tier: 2,
        text: "The effect in useProductSearch.ts no longer binds a response to the query that requested it. The before-file had a cancelled flag — find what replaced it.",
      },
      {
        tier: 3,
        text: "The defect is the line that applies the response without checking it is still the latest request. Guard with a request id (or an AbortController) and drop everything else.",
      },
    ],
  },
];

const BY_ID = new Map(DIFF_CHALLENGES.map((c) => [c.id, c]));

/**
 * Lookup used by lesson definitions, so a review lives in exactly one place
 * and lessons reference it by id. Throws on a typo rather than rendering
 * nothing — tests assert every referenced id resolves.
 */
export function diffChallenge(id: string): DiffExercise {
  const found = BY_ID.get(id);
  if (!found) {
    throw new Error(
      `Unknown diff challenge "${id}" — add it to src/data/diff-challenges.ts`
    );
  }
  return found;
}
