import { HashRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Learn from "./pages/Learn";
import Lesson from "./pages/Lesson";
import PlaygroundPage from "./pages/PlaygroundPage";
import Certificate from "./pages/Certificate";
import Portfolio from "./pages/Portfolio";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/learn/:trackId/:lessonId" element={<Lesson />} />
        <Route path="/playground" element={<PlaygroundPage />} />
        <Route path="/certificate/:trackId" element={<Certificate />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}
