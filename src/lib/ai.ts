/**
 * BYOK (Bring Your Own Key) settings for AI providers.
 * Keys are stored in localStorage and never leave the browser
 * except when the student explicitly triggers an AI call.
 */

const SETTINGS_KEY = "cl_ai_settings";

export type AiProvider = "gemini" | "claude" | null;

export type AiSettings = {
  /** Which provider is active (null = AI disabled). */
  provider: AiProvider;
  /** API keys keyed by provider slug. */
  keys: Partial<Record<"gemini" | "claude", string>>;
  /** Student's name for the tutor to use. */
  tutorName: string;
};

const DEFAULTS: AiSettings = {
  provider: null,
  keys: {},
  tutorName: "",
};

export function loadAiSettings(): AiSettings {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (raw) return { ...DEFAULTS, ...JSON.parse(raw) };
  } catch { /* corrupted — fall through */ }
  return { ...DEFAULTS };
}

export function saveAiSettings(s: AiSettings) {
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(s));
  } catch { /* storage unavailable */ }
  emit();
}

/* ------------------------------------------------------------------ */
/* Tiny pub/sub so the settings modal and tutor stay in sync           */
/* ------------------------------------------------------------------ */

type Listener = () => void;
const listeners = new Set<Listener>();

export function subscribeAiSettings(fn: Listener): () => void {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

function emit() {
  for (const fn of listeners) fn();
}

/* ------------------------------------------------------------------ */
/* AI Provider Calls                                                   */
/* ------------------------------------------------------------------ */

export type TutorMessage = {
  role: "system" | "user" | "assistant";
  content: string;
};

/**
 * Call the selected AI provider. Returns the assistant's response text.
 * Throws on network/auth errors so the caller can show a friendly message.
 */
export async function callAi(
  messages: TutorMessage[],
  settings?: AiSettings,
): Promise<string> {
  const s = settings ?? loadAiSettings();
  if (!s.provider || !s.keys[s.provider]) {
    throw new Error("No AI provider configured. Add your API key in Settings.");
  }

  if (s.provider === "gemini") {
    return callGemini(messages, s.keys.gemini!);
  }
  return callClaude(messages, s.keys.claude!);
}

async function callGemini(messages: TutorMessage[], apiKey: string): Promise<string> {
  // Convert our message format to Gemini's API format
  const contents = messages
    .filter((m) => m.role !== "system")
    .map((m) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    }));

  const systemInstruction = messages.find((m) => m.role === "system");

  const body: Record<string, unknown> = { contents };
  if (systemInstruction) {
    body.systemInstruction = { parts: [{ text: systemInstruction.content }] };
  }

  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    },
  );

  if (!res.ok) {
    const err = await res.text().catch(() => "");
    throw new Error(`Gemini API error (${res.status}): ${err.slice(0, 200)}`);
  }

  const data = await res.json();
  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) throw new Error("Gemini returned an empty response.");
  return text;
}

async function callClaude(messages: TutorMessage[], apiKey: string): Promise<string> {
  const system = messages.find((m) => m.role === "system")?.content ?? "";
  const chatMessages = messages
    .filter((m) => m.role !== "system")
    .map((m) => ({ role: m.role as "user" | "assistant", content: m.content }));

  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
      "anthropic-dangerous-direct-browser-access": "true",
    },
    body: JSON.stringify({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1024,
      system,
      messages: chatMessages,
    }),
  });

  if (!res.ok) {
    const err = await res.text().catch(() => "");
    throw new Error(`Claude API error (${res.status}): ${err.slice(0, 200)}`);
  }

  const data = await res.json();
  const text = data?.content?.[0]?.text;
  if (!text) throw new Error("Claude returned an empty response.");
  return text;
}
