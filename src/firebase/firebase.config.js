// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtMPRP2slmXf2pBQp7QdebaCduflukGYE",
  authDomain: "educational--toys.firebaseapp.com",
  projectId: "educational--toys",
  storageBucket: "educational--toys.appspot.com",
  messagingSenderId: "465468159525",
  appId: "1:465468159525:web:ee249cee3f22f588bdf1cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;