// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABS8xpCxWEhXsrc73bbs_iyfvGne57Ia4",
  authDomain: "portfolio-b38a6.firebaseapp.com",
  projectId: "portfolio-b38a6",
  storageBucket: "portfolio-b38a6.firebasestorage.app",
  messagingSenderId: "836260159775",
  appId: "1:836260159775:web:ead811e4d2163dc45bd02a",
  measurementId: "G-R7TXM3QWC1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
