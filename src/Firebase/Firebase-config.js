// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBhrwyf1HIEwKu0CtG00xRW4Hxzf3Vv_gg",
    authDomain: "powersoft-robotics.firebaseapp.com",
    projectId: "powersoft-robotics",
    storageBucket: "powersoft-robotics.appspot.com",
    messagingSenderId: "912887864275",
    appId: "1:912887864275:web:2296d12235cb4a5700ad26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app