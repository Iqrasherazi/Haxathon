
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    sendEmailVerification,
    RecaptchaVerifier,
    signInWithPhoneNumber,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    deleteUser,
    fetchSignInMethodsForEmail,
    updateProfile,
    updateEmail,
} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyASHMgniLCCueywzQhWlty0ZVxRFXgLs2k",
    authDomain: "haxathon-72897.firebaseapp.com",
    projectId: "haxathon-72897",
    storageBucket: "haxathon-72897.firebasestorage.app",
    messagingSenderId: "441216639703",
    appId: "1:441216639703:web:b9a40c28edd67b92c7c692"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export {
    getAuth,
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    sendEmailVerification,
    RecaptchaVerifier,
    signInWithPhoneNumber,
    GoogleAuthProvider,
    signInWithPopup,
    provider,
    signOut,
    deleteUser,
    updateEmail,
    updateProfile
};

import {
    getFirestore,
    doc,
    setDoc,
    Timestamp,
    collection,
    addDoc,
    updateDoc,
    serverTimestamp,
    arrayUnion,
    arrayRemove,
    increment,
    onSnapshot,
    orderBy,
    query,
    where,
    getDoc,
} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export {
    getFirestore,
    db,
    doc,
    setDoc,
    Timestamp,
    collection,
    addDoc,
    serverTimestamp,
    arrayUnion,
    arrayRemove,
    increment,
    onSnapshot,
    fetchSignInMethodsForEmail,
    orderBy,
    query,
    where,
    getDoc,
    updateDoc,
};

import {
    getStorage,
    ref,
    uploadBytes,
    getDownloadURL,
} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-storage.js";

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);

export { storage, getStorage, ref, uploadBytes, getDownloadURL };
