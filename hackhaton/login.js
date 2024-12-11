import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "./firebasauth.js";

// Firebase Auth instance
const auth = getAuth();
const provider = new GoogleAuthProvider();

// DOM elements
let signInBtn = document.getElementById("signInBtn");
let signInEmail = document.getElementById("signInEmail");
let signInPassword = document.getElementById("signInPassword");
let googleBtn = document.getElementById("googleBtn");

// Email and Password Login
let signIn = async () => {
  let email = signInEmail.value.trim();
  let password = signInPassword.value.trim();

  if (email === "" || password === "") {
    Swal.fire("Error", "Please fill out both fields.", "error");
    return;
  }

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    if (!user.emailVerified) {
      Swal.fire("Error", "Please verify your email first.", "error");
      return;
    }

    Swal.fire("Success", "Login successful!", "success");
    setTimeout(() => {
      window.location.href = "home.html"; // Redirect to home page
    }, 2000);
  } catch (error) {
    console.error("Login Error:", error);
    // Provide user-friendly error messages
    let errorMessage;
    switch (error.code) {
      case "auth/user-not-found":
        errorMessage = "User not found. Please sign up.";
        break;
      case "auth/wrong-password":
        errorMessage = "Invalid password. Please try again.";
        break;
      case "auth/too-many-requests":
        errorMessage = "Too many failed attempts. Please try again later.";
        break;
      case "auth/invalid-email":
        errorMessage = "Invalid email format. Please enter a valid email.";
        break;
      default:
        errorMessage = error.message;
    }
    Swal.fire("Error", errorMessage, "error");
  }
};

signInBtn.addEventListener("click", signIn);

// Google Login
let googleLogin = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    Swal.fire("Success", `Welcome, ${user.displayName}!`, "success");
    setTimeout(() => {
      window.location.href = "home.html"; // Redirect to home page
    }, 2000);
  } catch (error) {
    console.error("Google Login Error:", error);
    Swal.fire("Error", "Google Login failed. Please try again.", "error");
  }
};

googleBtn.addEventListener("click", googleLogin);
