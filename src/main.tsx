import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AccountProvider } from "./AccountProvider";
import "./index.css";

// Register service worker for PWA offline support
if ("serviceWorker" in navigator && import.meta.env.PROD) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").catch(() => {
      // SW registration failed — non-critical, app still works
    });
  });
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AccountProvider>
      <App />
    </AccountProvider>
  </React.StrictMode>
);
