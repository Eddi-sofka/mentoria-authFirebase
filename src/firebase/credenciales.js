// Importamos la función para inicializar la aplicación de Firebase
import { initializeApp } from "firebase/app";

// Añade aquí tus credenciales
const firebaseConfig = {
  apiKey: "AIzaSyAyJP6c3SqKYCna-XbYkg1g9SWvul0rJ6U",
  authDomain: "mentoria-login-firebase.firebaseapp.com",
  projectId: "mentoria-login-firebase",
  storageBucket: "mentoria-login-firebase.appspot.com",
  messagingSenderId: "105015851515",
  appId: "1:105015851515:web:aa9938e14a21df10d7b35e"
};

// Inicializamos la aplicación y la guardamos en firebaseApp
const firebaseApp = initializeApp(firebaseConfig);
// Exportamos firebaseApp para poder utilizarla en cualquier lugar de la aplicación
export default firebaseApp;
