export default function CodeBlock({ code }: { code: string }) {
  return (
    <pre className="code-window my-4 p-4 font-mono text-[13px] leading-relaxed text-mint-300/90">
      <code>{code}</code>
    </pre>
  );
}
