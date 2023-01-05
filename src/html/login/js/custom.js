// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASx9dFc6axKmJBeWX19146vnv4Ue6wwiU",
  authDomain: "instagram-clone-99348.firebaseapp.com",
  databaseURL: "https://instagram-clone-99348-default-rtdb.firebaseio.com",
  projectId: "instagram-clone-99348",
  storageBucket: "instagram-clone-99348.appspot.com",
  messagingSenderId: "260764681304",
  appId: "1:260764681304:web:c5ca07ceaf15559992f62d",
  measurementId: "G-D9432PEGKQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// 이메일과 비밀번호를 받아서 새로운 user 생성하는 코드
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const signUpButton = document.querySelector(".sign-up-button");
const loginButton = document.querySelector(".login-button");

if (signUpButton !== null) {
  signUpButton.addEventListener("click", (e) => {
    e.preventDefault(e);
    const signUpEmail = document.getElementById("Email").value;
    const signUpPassword = document.getElementById("Password1").value;
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
      // 회원가입 성공시,
      .then((userCredential) => {
        const user = userCredential.user;
        // ...
        console.log(userCredential);
      })
      // 회원가입 실패시,
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  });
}

if (loginButton !== null) {
  loginButton.addEventListener("click", (e) => {
    e.preventDefault();

    const loginEmail = document.getElementById("Email").value;
    const loginPassword = document.getElementById("Password").value;

    const auth = getAuth();
    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...

        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  });
}
