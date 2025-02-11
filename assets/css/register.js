import { auth, createUserWithEmailAndPassword } from "./firebase-config.js";

document.getElementById("signupForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            alert("Signup successful! Redirecting to login...");
            window.location.href = "login.html";
        })
        .catch(error => {
            alert("Error: " + error.message);
        });
});
