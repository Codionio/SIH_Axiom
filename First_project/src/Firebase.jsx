// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSivdeq8eRJly0zsZ7BUuM34XCXMfHivQ",
  authDomain: "sihauth-3abc7.firebaseapp.com",
  projectId: "sihauth-3abc7",
  storageBucket: "sihauth-3abc7.firebasestorage.app",
  messagingSenderId: "820091911692",
  appId: "1:820091911692:web:6da3fdd399e55aaded7829",
  measurementId: "G-DGQ22W3W8L"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);