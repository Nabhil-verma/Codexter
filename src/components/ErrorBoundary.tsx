import { Component, type ReactNode } from "react";

type Props = { children: ReactNode };
type State = { error: Error | null };

/**
 * Last-resort boundary around the whole app: if anything throws at render,
 * the user sees an actionable card instead of a blank page, and the error is
 * logged so the hosted console captures it.
 */
export default class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error) {
    // eslint-disable-next-line no-console
    console.error("[app-crash]", error);
  }

  render() {
    const { error } = this.state;
    if (!error) return this.props.children;
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0b",
          color: "#fafafa",
          fontFamily: "system-ui, sans-serif",
          padding: 24,
        }}
      >
        <div
          style={{
            maxWidth: 520,
            width: "100%",
            background: "#141416",
            border: "1px solid #2a2a2e",
            borderRadius: 16,
            padding: 32,
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 34, marginBottom: 10 }}>⚠️</div>
          <h1 style={{ fontSize: 19, fontWeight: 650, margin: "0 0 8px" }}>
            Something broke while rendering
          </h1>
          <p style={{ color: "#a1a1aa", fontSize: 13.5, lineHeight: 1.55, margin: "0 0 6px" }}>
            The error below refreshes away with a reload. If it repeats, copy it —
            it names the exact component that crashed.
          </p>
          <pre
            style={{
              marginTop: 14,
              background: "#0a0a0b",
              border: "1px solid #2a2a2e",
              borderRadius: 10,
              padding: "12px 14px",
              textAlign: "left",
              fontSize: 12,
              color: "#fbbf24",
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
              maxHeight: 180,
              overflow: "auto",
            }}
          >
            {error.message}
          </pre>
          <button
            type="button"
            onClick={() => {
              try {
                caches
                  .keys()
                  .then((keys) =>
                    Promise.all(keys.map((k) => caches.delete(k)))
                  )
                  .finally(() => window.location.reload());
              } catch {
                window.location.reload();
              }
            }}
            style={{
              marginTop: 18,
              background: "#f5c04e",
              color: "#131313",
              border: "none",
              borderRadius: 999,
              padding: "10px 22px",
              fontSize: 14,
              fontWeight: 650,
              cursor: "pointer",
            }}
          >
            Clear cache &amp; reload
          </button>
        </div>
      </div>
    );
  }
}
