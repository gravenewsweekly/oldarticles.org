import { auth, createUserWithEmailAndPassword } from "./firebase-config.js";

document.getElementById("signup-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            document.getElementById("message").innerText = "Sign-up successful!";
        })
        .catch((error) => {
            document.getElementById("message").innerText = error.message;
        });
});
