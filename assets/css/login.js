import { auth, signInWithEmailAndPassword } from "./firebase-config.js";

document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            alert("Login successful! Redirecting...");
            window.location.href = "home.html";
        })
        .catch(error => {
            alert("Error: " + error.message);
        });
});
