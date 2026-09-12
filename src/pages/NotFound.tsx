import { Link } from "react-router-dom";
import Nav from "../components/Nav";

export default function NotFound() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main className="mx-auto max-w-3xl px-4 py-28 text-center">
        <p className="font-display text-7xl font-semibold text-gold-500">404</p>
        <h1 className="mt-6 font-display text-3xl font-semibold text-ink-950">
          SyntaxError: page not found
        </h1>
        <p className="mx-auto mt-3 max-w-md text-ink-600">
          Unexpected token at line 1, column 1. The page you're looking for
          doesn't exist.
        </p>
        <Link to="/" className="btn-primary mt-10">
          Back to safety
        </Link>
      </main>
    </div>
  );
}
