import firebase from "firebase";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyBOy35JWcELhPp3kXRbmcgyb7PO38DZrPs",
    authDomain: "chat-bot-76600.firebaseapp.com",
    projectId: "chat-bot-76600",
    storageBucket: "chat-bot-76600.appspot.com",
    messagingSenderId: "873991888713",
    appId: "1:873991888713:web:aa9132fa1eaa7bca628498",
    measurementId: "G-VHNPTBDY6H"
  }).auth();
