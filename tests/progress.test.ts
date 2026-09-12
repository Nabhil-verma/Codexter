import { describe, it, expect, beforeEach, vi } from "vitest";
import { loadProgress, saveProgress } from "../src/lib/progress";

// Minimal localStorage stub (jsdom-free)
const store = new Map<string, string>();
vi.stubGlobal("localStorage", {
  getItem: (k: string) => store.get(k) ?? null,
  setItem: (k: string, v: string) => void store.set(k, v),
  removeItem: (k: string) => void store.delete(k),
});

beforeEach(() => store.clear());

describe("progress", () => {
  it("returns empty progress when nothing stored", () => {
    expect(loadProgress()).toEqual({ completed: {} });
  });

  it("saves and loads round-trip", () => {
    saveProgress({ completed: { "web/html-semantic": 1 } });
    expect(loadProgress().completed["web/html-semantic"]).toBe(1);
  });

  it("handles corrupted storage gracefully", () => {
    store.set("clr-progress-v1", "{not json");
    expect(loadProgress()).toEqual({ completed: {} });
  });

  it("ignores a missing localStorage", () => {
    vi.stubGlobal("localStorage", undefined);
    expect(() => saveProgress({ completed: { x: 1 } })).not.toThrow();
    expect(loadProgress()).toEqual({ completed: {} });
    // restore for other tests
    vi.stubGlobal("localStorage", {
      getItem: (k: string) => store.get(k) ?? null,
      setItem: (k: string, v: string) => void store.set(k, v),
      removeItem: (k: string) => void store.delete(k),
    });
  });
});
