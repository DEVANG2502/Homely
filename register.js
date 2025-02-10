// Import Firebase App and Authentication SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-auth.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9RZC0l1mPEsZNzwGpPMPFqc4_wPlFU3c",
  authDomain: "login-ff4a3.firebaseapp.com",
  projectId: "login-ff4a3",
  storageBucket: "login-ff4a3.firebasestorage.app",
  messagingSenderId: "777300705725",
  appId: "1:777300705725:web:565f8884a9e827f57852d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get the Authentication instance
const auth = getAuth(app);

// Get the signup form
const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  
  // Validate input
  if (!email.includes("@") || password.length < 6) {
    alert("Please provide a valid email and a password with at least 6 characters.");
    return;
  }

  // Use Firebase Authentication to create the user
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up successfully
      const user = userCredential.user;
      console.log("User signed up successfully: ", user);

      // Redirect to the login page or another page after successful signup
      window.location.href = "login.html"; // Change this URL to wherever you want
    })
    .catch((error) => {
      // Handle errors
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("Error during signup: " + errorMessage);
    });
});
