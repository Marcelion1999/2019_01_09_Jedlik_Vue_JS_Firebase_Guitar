import firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyAyXy8BiSq3IHSC5tsbkeygR-B6lY-AddM",
  authDomain: "runes-d816b.firebaseapp.com",
  databaseURL: "https://runes-d816b.firebaseio.com",
  projectId: "runes-d816b",
  storageBucket: "runes-d816b.appspot.com",
  messagingSenderId: "191617459006"
};

let app = firebase.initializeApp(config);
const db = app.firestore();
db.settings({ timestampsInSnapshots: true });
export default db;
