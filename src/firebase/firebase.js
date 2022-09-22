// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCo2fOgJ1m4AHvnrU54pBXZ_mq5Rfig4a4",
  authDomain: "coder34720-candyshop-briguera.firebaseapp.com",
  projectId: "coder34720-candyshop-briguera",
  storageBucket: "coder34720-candyshop-briguera.appspot.com",
  messagingSenderId: "306959807084",
  appId: "1:306959807084:web:e4ee1c0221b27820cf5e49",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
