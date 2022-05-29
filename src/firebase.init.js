// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAPkHnckGqXVmcRz--Fw_ashz-2srLliPI",
    authDomain: "niksmoto.firebaseapp.com",
    projectId: "niksmoto",
    storageBucket: "niksmoto.appspot.com",
    messagingSenderId: "73636550495",
    appId: "1:73636550495:web:b4cd92050c970abab248ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;