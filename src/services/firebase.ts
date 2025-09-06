import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';
import { getAnalytics } from 'firebase/analytics';

// Check if Firebase is properly configured
const isFirebaseConfigured = () => {
  const apiKey = import.meta.env.VITE_FIREBASE_API_KEY;
  return apiKey && apiKey !== 'demo_api_key' && apiKey.length > 10;
};

let app: ReturnType<typeof initializeApp> | null = null;
let auth: ReturnType<typeof getAuth> | null = null;
let db: ReturnType<typeof getFirestore> | null = null;
let rtdb: ReturnType<typeof getDatabase> | null = null;
let storage: ReturnType<typeof getStorage> | null = null;
let analytics: ReturnType<typeof getAnalytics> | null = null;

if (isFirebaseConfigured()) {
  try {
    const firebaseConfig = {
      apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
      authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
      databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
      projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
      storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
      appId: import.meta.env.VITE_FIREBASE_APP_ID,
      measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
    };

    // Initialize Firebase
    app = initializeApp(firebaseConfig);

    // Initialize Firebase services
    auth = getAuth(app);
    db = getFirestore(app);
    rtdb = getDatabase(app);
    storage = getStorage(app);
    analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;
  } catch (error) {
    console.warn('Firebase initialization failed, using mock authentication:', error);
    app = null;
    auth = null;
    db = null;
    rtdb = null;
    storage = null;
    analytics = null;
  }
} else {
  console.warn('Firebase not configured, using mock authentication for development');
}

export { auth, db, rtdb, storage, analytics };
export default app;