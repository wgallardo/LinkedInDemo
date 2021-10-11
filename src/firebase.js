import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAzOMB7chwaR1BIw_l5qY_mIOEfMiUPbTw",
  authDomain: "linkedemo-b7bf1.firebaseapp.com",
  projectId: "linkedemo-b7bf1",
  storageBucket: "linkedemo-b7bf1.appspot.com",
  messagingSenderId: "229495116116",
  appId: "1:229495116116:web:f2baf3a4a299eb6b7378c1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
