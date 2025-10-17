// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-analytics.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
import{
  getFirestore,
  doc,
  getDoc
} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";
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

const auth = getAuth(app);
const db = getFirestore(app);

//submit button
const submit = document.getElementById("login");
const messageElement = document.getElementById("message")
submit.addEventListener("click", function (event) {
  event.preventDefault();

  //inputs
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const selectedRole = document.getElementById('role').value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      //alert("Logging in");
      //window.location.href = "index.html";

      //return db.collection('users').doc(user.uid).get();
      return getDoc(doc(db, 'users', user.uid));
      // ...
    })
    .then((docSnap)=>{
      if (docSnap.exists()){
        const userData = docSnap.data();
        const userRole = userData.role;

        if(userRole === selectedRole){
          messageElement.textContent = 'Login Successful!';
          messageElement.style.color = 'green';

          redirectBasedOnRole(userRole);
        }else{
          messageElement.textContent = 'Invalid role selected';
          messageElement.style.color = 'red';
          auth.signOut();
        }
      }else{
        messageElement.textContent = 'User data not found!';
        messageElement.style.color = 'red';
      }
    })


    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
    });
});

//redirect users based on role
function redirectBasedOnRole(role){
  setTimeout(() => {
    switch(role){
      case "Supervisor":
        //alert("Supervisor Logging in");
        window.location.href = 'supervisor.html';
        break
      case 'HOD':
        //alert("HOD Logging in");
        window.location.href = 'hod.html';
        break
      default:
        window.location.href = 'default.html';
    }
  }, 1000);
}
