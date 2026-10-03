import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import "../codexter.css";
import Arena from "./Arena";
import Dashboard from "./Dashboard";
import Landing from "./Landing";
import Leaderboard from "./Leaderboard";
import {
  sampleDaily,
  sampleLesson,
  sampleMe,
  sampleMessages,
  sampleModules,
  sampleOutput,
  samplePlayers,
  sampleStarterCode,
  sampleStats,
  sampleTests,
} from "../data/mock";
import { cn } from "../lib/cn";
import type { ChatMessage, RunOutcome, TerminalLine } from "../types";

type View = "landing" | "dashboard" | "arena" | "leaderboard";

const views: Array<{ id: View; label: string }> = [
  { id: "landing", label: "Landing" },
  { id: "dashboard", label: "Dashboard" },
  { id: "arena", label: "Arena" },
  { id: "leaderboard", label: "Leaderboard" },
];

const viewIds = new Set<string>(views.map((v) => v.id));

/**
 * The open view lives in `?view=`, so each screen is linkable on its own and a
 * reload lands where you were. Anything unrecognised falls back to the landing
 * page rather than rendering a blank frame.
 */
function usePreviewView(): [View, (next: View) => void] {
  const [params, setParams] = useSearchParams();
  const requested = params.get("view");
  const view: View = requested && viewIds.has(requested) ? (requested as View) : "landing";
  const setView = (next: View) => setParams({ view: next }, { replace: true });
  return [view, setView];
}

function ArenaDemo() {
  const [code, setCode] = useState(sampleStarterCode);
  const [activeFile, setActiveFile] = useState("sumEvens.js");
  const [messages, setMessages] = useState<ChatMessage[]>(sampleMessages);
  const [output, setOutput] = useState<TerminalLine[]>(sampleOutput);
  const [outcome, setOutcome] = useState<RunOutcome | undefined>();
  const [running, setRunning] = useState(false);
  const [thinking, setThinking] = useState(false);

  const run = () => {
    setRunning(true);
    window.setTimeout(() => {
      setRunning(false);
      const fixed = !code.includes("nums.length - 1");
      setOutput(
        fixed
          ? [{ id: "r1", kind: "pass", text: "sumEvens([2, 4, 6]) returned 12" }]
          : sampleOutput,
      );
      setOutcome({ passed: fixed, xpAwarded: fixed ? 120 : undefined });
      window.setTimeout(() => setOutcome(undefined), 3500);
    }, 600);
  };

  const send = (text: string) => {
    setMessages((prev) => [...prev, { id: `u${prev.length}`, role: "user", content: text }]);
    setThinking(true);
    window.setTimeout(() => {
      setThinking(false);
      setMessages((prev) => [
        ...prev,
        { id: `s${prev.length}`, role: "socratic", content: "What would change if the condition were i < nums.length?" },
      ]);
    }, 1400);
  };

  return (
    <Arena
      lesson={sampleLesson}
      files={["sumEvens.js"]}
      activeFile={activeFile}
      onSelectFile={setActiveFile}
      code={code}
      onCodeChange={setCode}
      onRun={run}
      running={running}
      outcome={outcome}
      messages={messages}
      tutorThinking={thinking}
      onSendMessage={send}
      output={output}
      tests={sampleTests}
    />
  );
}

export default function RevampPreview() {
  const [view, setView] = usePreviewView();
  const noop = () => undefined;

  return (
    <div className="codexter-dark min-h-screen bg-[#030305]">
      <div
        role="tablist"
        aria-label="Preview page"
        className="fixed bottom-6 left-1/2 z-[60] flex -translate-x-1/2 gap-1 rounded-full border border-white/10 bg-[#0A0A0F]/80 p-1 backdrop-blur-2xl"
      >
        {views.map(({ id, label }) => (
          <button
            key={id}
            role="tab"
            type="button"
            aria-selected={view === id}
            onClick={() => setView(id)}
            className={cn(
              "rounded-full px-4 py-2 text-xs outline-none transition-colors focus-visible:ring-2 focus-visible:ring-cyan-500",
              view === id ? "bg-white/10 text-white" : "text-zinc-500 hover:text-zinc-200",
            )}
          >
            {label}
          </button>
        ))}
      </div>

      {view === "landing" && <Landing stats={sampleStats} onStart={noop} onWatchDemo={() => setView("arena")} />}
      {view === "dashboard" && (
        <Dashboard
          player={sampleMe}
          modules={sampleModules}
          daily={sampleDaily}
          onContinueModule={() => setView("arena")}
          onStartDaily={() => setView("arena")}
        />
      )}
      {view === "arena" && <ArenaDemo />}
      {view === "leaderboard" && <Leaderboard entries={samplePlayers} currentPlayerId={sampleMe.id} />}
    </div>
  );
}
