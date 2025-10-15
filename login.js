// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-analytics.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCz_GUEjGA_gw_3m2MwUvC_gA55ZuuUEdw",
  authDomain: "leavemanagementsystem-516f3.firebaseapp.com",
  projectId: "leavemanagementsystem-516f3",
  storageBucket: "leavemanagementsystem-516f3.firebasestorage.app",
  messagingSenderId: "222395625879",
  appId: "1:222395625879:web:abc62677380427bcef54d2",
  measurementId: "G-LMED77CNJW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();

//submit button
const submit = document.getElementById("login");
submit.addEventListener("click", function (event) {
  event.preventDefault();

  //inputs
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  //const role = document.getElementById('role').value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      alert("Logging in");
      window.location.href = "index.html";
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
    });
});
