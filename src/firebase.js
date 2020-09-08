import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyClEsCnR4blHjHx0OKUVioNA0klxl454ok",
  authDomain: "slack-clone-d449f.firebaseapp.com",
  databaseURL: "https://slack-clone-d449f.firebaseio.com",
  projectId: "slack-clone-d449f",
  storageBucket: "slack-clone-d449f.appspot.com",
  messagingSenderId: "383750867812",
  appId: "1:383750867812:web:aff59b69691d99e9874871",
  measurementId: "G-C2J9LM5TEB"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;