import { useEffect, useRef, useState, type FormEvent, type KeyboardEvent, type UIEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { BookOpen, CheckCircle2, Play, Send, Sparkles, XCircle } from "lucide-react";
import { CyberBadge } from "../components/ui/CyberBadge";
import { NeonPulseButton } from "../components/ui/NeonPulseButton";
import { SocraticChatBubble, SocraticStatus } from "../components/ui/SocraticChatBubble";
import { cn } from "../lib/cn";
import type { ChatMessage, LessonContent, RunOutcome, TerminalLine, TestResult } from "../types";

/* -------------------------------------------------------------------------- */
/* Left pane: lesson + Socratic drawer                                        */
/* -------------------------------------------------------------------------- */

type LeftTab = "lesson" | "socratic";

interface TutorPaneProps {
  lesson: LessonContent;
  messages: ChatMessage[];
  thinking: boolean;
  onSend: (text: string) => void;
}

function TutorPane({ lesson, messages, thinking, onSend }: TutorPaneProps) {
  const reduce = useReducedMotion();
  const [tab, setTab] = useState<LeftTab>("lesson");
  const [draft, setDraft] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (tab !== "socratic") return;
    endRef.current?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "end" });
  }, [messages, thinking, tab, reduce]);

  const submit = (event: FormEvent) => {
    event.preventDefault();
    const text = draft.trim();
    if (!text) return;
    onSend(text);
    setDraft("");
  };

  const tabs: Array<{ id: LeftTab; label: string; icon: typeof BookOpen }> = [
    { id: "lesson", label: "Lesson", icon: BookOpen },
    { id: "socratic", label: "Socratic AI", icon: Sparkles },
  ];

  return (
    <section aria-label="Lesson and tutor" className="flex min-h-[28rem] flex-col border-white/5 bg-[#0A0A0F] lg:min-h-0 lg:border-r">
      <div role="tablist" aria-label="Left panel" className="flex gap-1 border-b border-white/5 px-3 pt-3">
        {tabs.map(({ id, label, icon: Icon }) => {
          const active = tab === id;
          return (
            <button
              key={id}
              role="tab"
              id={`tab-${id}`}
              aria-selected={active}
              aria-controls={`panel-${id}`}
              type="button"
              onClick={() => setTab(id)}
              className={cn(
                "relative flex items-center gap-2 rounded-t-lg px-4 py-2.5 text-sm outline-none transition-colors focus-visible:ring-2 focus-visible:ring-cyan-500",
                active ? "text-[#FAFAFA]" : "text-zinc-500 hover:text-zinc-300",
              )}
            >
              <Icon aria-hidden className="h-4 w-4" />
              {label}
              {active && (
                <motion.span
                  layoutId="arena-left-tab"
                  className="absolute inset-x-2 -bottom-px h-px bg-[#00E5FF] shadow-[0_0_10px_rgba(0,229,255,0.8)]"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>

      {tab === "lesson" ? (
        <div role="tabpanel" id="panel-lesson" aria-labelledby="tab-lesson" className="flex-1 overflow-y-auto p-8">
          <CyberBadge tone="violet">{lesson.track}</CyberBadge>
          <h1 className="mt-6 font-display text-2xl font-extrabold tracking-tighter text-[#FAFAFA]">{lesson.title}</h1>
          <p className="mt-6 border-l border-cyan-400/30 pl-4 text-sm leading-7 text-cyan-100/80">{lesson.objective}</p>
          <div className="mt-8 space-y-5 text-sm leading-7 text-slate-400">
            {lesson.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      ) : (
        <div role="tabpanel" id="panel-socratic" aria-labelledby="tab-socratic" className="flex min-h-0 flex-1 flex-col">
          <div role="log" aria-live="polite" className="flex flex-1 flex-col gap-6 overflow-y-auto p-6">
            {messages.length === 0 && !thinking && (
              <p className="text-sm leading-7 text-zinc-500">
                Ask about anything in this lesson. The tutor will answer with a question that points you at the fix.
              </p>
            )}
            {messages.map((m) => (
              <SocraticChatBubble key={m.id} role={m.role} hints={m.hints} onHint={onSend}>
                {m.content}
              </SocraticChatBubble>
            ))}
            {thinking && <SocraticStatus />}
            <div ref={endRef} />
          </div>

          <form onSubmit={submit} className="border-t border-white/5 p-4">
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] py-1.5 pl-5 pr-1.5 transition-colors focus-within:border-cyan-400/40">
              <input
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                aria-label="Message Socratic AI"
                placeholder="Ask a question"
                className="min-w-0 flex-1 bg-transparent text-sm text-zinc-100 placeholder:text-zinc-600 outline-none"
              />
              <button
                type="submit"
                aria-label="Send message"
                disabled={!draft.trim()}
                className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#00E5FF] text-[#031014] outline-none transition-all duration-300 hover:shadow-[0_0_24px_rgba(0,229,255,0.4)] focus-visible:ring-2 focus-visible:ring-cyan-300 active:scale-[0.97] disabled:opacity-30 disabled:shadow-none"
              >
                <Send aria-hidden className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      )}
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Center pane: editor                                                        */
/* -------------------------------------------------------------------------- */

const LINE_HEIGHT = 24;
const EDITOR_PAD = 16;

interface CodeEditorPaneProps {
  files: string[];
  activeFile: string;
  onSelectFile: (name: string) => void;
  code: string;
  onCodeChange: (value: string) => void;
  onRun: () => void;
  running: boolean;
  outcome?: RunOutcome;
}

function CodeEditorPane({
  files,
  activeFile,
  onSelectFile,
  code,
  onCodeChange,
  onRun,
  running,
  outcome,
}: CodeEditorPaneProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [activeLine, setActiveLine] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);
  const lineCount = code.split("\n").length;

  const syncActiveLine = () => {
    const el = textareaRef.current;
    if (!el) return;
    setActiveLine(el.value.slice(0, el.selectionStart).split("\n").length - 1);
  };

  const onKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if ((event.metaKey || event.ctrlKey) && event.key === "Enter") {
      event.preventDefault();
      onRun();
      return;
    }
    if (event.key === "Tab") {
      event.preventDefault();
      const el = event.currentTarget;
      const { selectionStart, selectionEnd } = el;
      onCodeChange(`${code.slice(0, selectionStart)}  ${code.slice(selectionEnd)}`);
      requestAnimationFrame(() => {
        el.selectionStart = el.selectionEnd = selectionStart + 2;
        syncActiveLine();
      });
    }
  };

  const onScroll = (event: UIEvent<HTMLTextAreaElement>) => setScrollTop(event.currentTarget.scrollTop);

  return (
    <section aria-label="Code editor" className="relative flex min-h-[26rem] flex-col bg-[#0A0A0F] lg:min-h-0">
      <div className="flex items-center justify-between border-b border-white/5 pl-3 pr-4">
        <div role="tablist" aria-label="Files" className="flex">
          {files.map((name) => {
            const active = name === activeFile;
            return (
              <button
                key={name}
                role="tab"
                type="button"
                aria-selected={active}
                onClick={() => onSelectFile(name)}
                className={cn(
                  "px-4 py-3.5 font-mono text-xs tracking-wide outline-none transition-colors focus-visible:ring-2 focus-visible:ring-cyan-500",
                  active ? "text-[#FAFAFA] shadow-[inset_0_-1px_0_#00E5FF]" : "text-zinc-500 hover:text-zinc-300",
                )}
              >
                {name}
              </button>
            );
          })}
        </div>
        <div className="flex items-center gap-3">
          <kbd className="hidden font-mono text-[0.7rem] tracking-widest text-zinc-600 sm:block">⌘ + Enter</kbd>
          <NeonPulseButton
            size="sm"
            icon={<Play className="h-3.5 w-3.5" />}
            loading={running}
            onClick={onRun}
            aria-label="Run code"
          >
            Run
          </NeonPulseButton>
        </div>
      </div>

      <div className="relative flex min-h-0 flex-1 font-mono text-[13px]" style={{ lineHeight: `${LINE_HEIGHT}px` }}>
        <div
          aria-hidden
          className="w-14 shrink-0 select-none overflow-hidden border-r border-white/5 text-right text-zinc-600"
        >
          <div style={{ transform: `translateY(${-scrollTop}px)`, padding: `${EDITOR_PAD}px 12px` }}>
            {Array.from({ length: lineCount }, (_, i) => (
              <div key={i} className={cn(i === activeLine && "text-cyan-300")}>
                {i + 1}
              </div>
            ))}
          </div>
        </div>

        <div className="relative min-w-0 flex-1">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 border-l-2 border-[#00E5FF] bg-cyan-400/[0.06] shadow-[inset_12px_0_24px_-12px_rgba(0,229,255,0.25)]"
            style={{ top: EDITOR_PAD + activeLine * LINE_HEIGHT - scrollTop, height: LINE_HEIGHT }}
          />
          <textarea
            ref={textareaRef}
            value={code}
            onChange={(e) => {
              onCodeChange(e.target.value);
              syncActiveLine();
            }}
            onKeyDown={onKeyDown}
            onKeyUp={syncActiveLine}
            onClick={syncActiveLine}
            onFocus={syncActiveLine}
            onScroll={onScroll}
            spellCheck={false}
            wrap="off"
            aria-label={`Editing ${activeFile}`}
            className="absolute inset-0 h-full w-full resize-none overflow-auto whitespace-pre bg-transparent px-4 text-zinc-200 caret-[#00E5FF] outline-none"
            style={{ paddingTop: EDITOR_PAD, paddingBottom: EDITOR_PAD, lineHeight: `${LINE_HEIGHT}px` }}
          />
        </div>
      </div>

      <AnimatePresence>
        {outcome && (
          <motion.div
            key={outcome.passed ? "pass" : "fail"}
            role="status"
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className={cn(
              "absolute bottom-6 right-6 flex items-center gap-3 rounded-2xl border px-5 py-3 text-sm backdrop-blur-2xl",
              outcome.passed
                ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-200 shadow-[0_0_30px_rgba(16,185,129,0.25)]"
                : "border-rose-400/30 bg-rose-400/10 text-rose-200 shadow-[0_0_30px_rgba(251,113,133,0.2)]",
            )}
          >
            {outcome.passed ? (
              <>
                <CheckCircle2 aria-hidden className="h-4 w-4" />
                All checks passed
                {outcome.xpAwarded ? (
                  <span className="font-mono text-xs tracking-widest text-emerald-300">+{outcome.xpAwarded} XP</span>
                ) : null}
              </>
            ) : (
              <>
                <XCircle aria-hidden className="h-4 w-4" />
                Not yet. Check the hint in the terminal.
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Right pane: tests + terminal                                               */
/* -------------------------------------------------------------------------- */

const lineStyle: Record<TerminalLine["kind"], string> = {
  stdout: "text-zinc-300",
  pass: "text-emerald-400/70",
  hint: "text-rose-300 [text-shadow:0_0_12px_rgba(251,113,133,0.45)]",
  error: "text-rose-400",
  info: "text-zinc-500",
};

const linePrefix: Record<TerminalLine["kind"], string> = {
  stdout: ">",
  pass: "✓",
  hint: "?",
  error: "✕",
  info: "·",
};

interface OutputPaneProps {
  output: TerminalLine[];
  tests: TestResult[];
}

function OutputPane({ output, tests }: OutputPaneProps) {
  const passing = tests.filter((t) => t.status === "pass").length;
  const logRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = logRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [output]);

  return (
    <section aria-label="Output and tests" className="flex min-h-[24rem] flex-col border-white/5 bg-[#0A0A0F] lg:min-h-0 lg:border-l">
      <div className="border-b border-white/5 p-6">
        <div className="flex items-baseline justify-between font-mono text-[0.7rem] uppercase tracking-widest text-zinc-500">
          <span>Tests</span>
          <span className="tabular-nums text-zinc-300">
            {passing}/{tests.length} passing
          </span>
        </div>
        <ul className="mt-5 flex flex-col gap-3">
          {tests.map((test) => (
            <li key={test.id} className="flex items-start gap-3 text-sm">
              {test.status === "pass" ? (
                <CheckCircle2 aria-label="Passing" className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400/80" />
              ) : (
                <XCircle aria-label="Failing" className="mt-0.5 h-4 w-4 shrink-0 text-rose-400" />
              )}
              <div className="min-w-0">
                <p className={test.status === "pass" ? "text-zinc-400" : "text-zinc-200"}>{test.name}</p>
                {test.detail && <p className="mt-1 font-mono text-xs text-zinc-600">{test.detail}</p>}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex min-h-0 flex-1 flex-col bg-black">
        <div className="border-b border-white/5 px-6 py-3 font-mono text-[0.7rem] uppercase tracking-widest text-zinc-600">
          Terminal
        </div>
        <div
          ref={logRef}
          role="log"
          aria-live="polite"
          className="flex-1 space-y-1.5 overflow-y-auto px-6 py-4 font-mono text-[0.8rem] leading-6"
        >
          {output.length === 0 ? (
            <p className="text-zinc-600">Run your code to see output here.</p>
          ) : (
            output.map((line) => (
              <p key={line.id} className={cn("flex gap-3", lineStyle[line.kind])}>
                <span aria-hidden className="w-3 shrink-0 select-none text-zinc-600">
                  {linePrefix[line.kind]}
                </span>
                <span className="min-w-0 whitespace-pre-wrap break-words">{line.text}</span>
              </p>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Page                                                                       */
/* -------------------------------------------------------------------------- */

export interface ArenaProps {
  lesson: LessonContent;
  files: string[];
  activeFile: string;
  onSelectFile: (name: string) => void;
  code: string;
  onCodeChange: (value: string) => void;
  onRun: () => void;
  running: boolean;
  outcome?: RunOutcome;
  messages: ChatMessage[];
  tutorThinking: boolean;
  onSendMessage: (text: string) => void;
  output: TerminalLine[];
  tests: TestResult[];
}

export default function Arena({
  lesson,
  files,
  activeFile,
  onSelectFile,
  code,
  onCodeChange,
  onRun,
  running,
  outcome,
  messages,
  tutorThinking,
  onSendMessage,
  output,
  tests,
}: ArenaProps) {
  return (
    <div className="grid min-h-screen grid-cols-1 divide-y divide-white/5 bg-[#030305] font-sans text-zinc-300 lg:h-[100dvh] lg:min-h-0 lg:grid-cols-[minmax(18rem,24rem)_minmax(0,1fr)_minmax(18rem,26rem)] lg:divide-y-0">
      <TutorPane lesson={lesson} messages={messages} thinking={tutorThinking} onSend={onSendMessage} />
      <CodeEditorPane
        files={files}
        activeFile={activeFile}
        onSelectFile={onSelectFile}
        code={code}
        onCodeChange={onCodeChange}
        onRun={onRun}
        running={running}
        outcome={outcome}
      />
      <OutputPane output={output} tests={tests} />
    </div>
  );
}
