/**
 * Firebase bootstrap.
 *
 * The app degrades gracefully: if the VITE_FIREBASE_* env vars are absent,
 * `firebaseReady` is false, `getFirebase()` returns null, and the app behaves
 * exactly like before — progress stays in localStorage.
 */
import { initializeApp, type FirebaseApp } from "firebase/app";
import { getAuth, type Auth } from "firebase/auth";
import { getDatabase, type Database } from "firebase/database";

const config = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY as string | undefined,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN as string | undefined,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL as string | undefined,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID as string | undefined,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET as string | undefined,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID as
    | string
    | undefined,
  appId: import.meta.env.VITE_FIREBASE_APP_ID as string | undefined,
};

/** All the vars required for auth + database to function. */
function hasConfig(): boolean {
  return Boolean(
    config.apiKey && config.authDomain && config.databaseURL && config.projectId && config.appId
  );
}

export const firebaseReady = hasConfig();

let app: FirebaseApp | null = null;
let auth: Auth | null = null;
let db: Database | null = null;

export function getFirebase(): { app: FirebaseApp; auth: Auth; db: Database } | null {
  if (!firebaseReady) return null;
  if (!app) {
    app = initializeApp(config);
    auth = getAuth(app);
    db = getDatabase(app);
  }
  return { app, auth: auth!, db: db! };
}
