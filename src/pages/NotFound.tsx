import { Link } from "react-router-dom";
import Nav from "../components/Nav";

export default function NotFound() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main className="mx-auto max-w-3xl px-4 py-24 text-center">
        <p className="font-mono text-6xl font-bold text-mint-400">404</p>
        <h1 className="mt-4 text-2xl font-bold text-white">
          SyntaxError: page not found
        </h1>
        <p className="mt-2 text-slate-400">
          Unexpected token at line 1, column 1. The page you're looking for
          doesn't exist.
        </p>
        <Link to="/" className="btn-primary mt-8">
          Back to safety
        </Link>
      </main>
    </div>
  );
}
