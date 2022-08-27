
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCQDRqnhsO-nuja7UC-9tm11CHvesxn9bc",
    authDomain: "mundo-invertido-projeto.firebaseapp.com",
    projectId: "mundo-invertido-projeto",
    storageBucket: "mundo-invertido-projeto.appspot.com",
    messagingSenderId: "409199594646",
    appId: "1:409199594646:web:4f552c97d7f9e41bcf46b7"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export default app