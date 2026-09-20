import { HashRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import type { ReactNode } from "react";
import Landing from "./pages/Landing";
import Learn from "./pages/Learn";
import Lesson from "./pages/Lesson";
import PlaygroundPage from "./pages/PlaygroundPage";
import Certificate from "./pages/Certificate";
import Portfolio from "./pages/Portfolio";
import Leaderboard from "./pages/Leaderboard";
import Clans from "./pages/Clans";
import AuthPage from "./pages/AuthPage";
import NotFound from "./pages/NotFound";
import ProfileBridge from "./components/gamification/ProfileBridge";
import { useAccount } from "./AccountProvider";

/** Everything inside requires a signed-in account; guests go to /auth. */
function RequireAuth({ children }: { children: ReactNode }) {
  const { user, authReady } = useAccount();
  const location = useLocation();
  if (!authReady) return null; // brief session check — nothing flashes
  if (!user) {
    const returnTo = encodeURIComponent(location.pathname + location.search);
    return <Navigate to={`/auth?returnTo=${returnTo}`} replace />;
  }
  return <>{children}</>;
}

export default function App() {
  return (
    <HashRouter>
      {/* Publishes guild membership to the client store (isolated so a cold
          backend can't take the whole app down). */}
      <ProfileBridge />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/learn"
          element={
            <RequireAuth>
              <Learn />
            </RequireAuth>
          }
        />
        <Route
          path="/learn/:trackId/:lessonId"
          element={
            <RequireAuth>
              <Lesson />
            </RequireAuth>
          }
        />
        <Route
          path="/playground"
          element={
            <RequireAuth>
              <PlaygroundPage />
            </RequireAuth>
          }
        />
        <Route
          path="/certificate/:trackId"
          element={
            <RequireAuth>
              <Certificate />
            </RequireAuth>
          }
        />
        <Route
          path="/portfolio"
          element={
            <RequireAuth>
              <Portfolio />
            </RequireAuth>
          }
        />
        <Route
          path="/leaderboard"
          element={
            <RequireAuth>
              <Leaderboard />
            </RequireAuth>
          }
        />
        <Route
          path="/clans"
          element={
            <RequireAuth>
              <Clans />
            </RequireAuth>
          }
        />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}
