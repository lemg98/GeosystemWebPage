
import firebase from 'firebase';
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAO2RnRjdn07kpZZbB-FsdpL5RRkXT25ZA",
  authDomain: "pruebaauth-5713a.firebaseapp.com",
  projectId: "pruebaauth-5713a",
  storageBucket: "pruebaauth-5713a.appspot.com",
  messagingSenderId: "684088561791",
  appId: "1:684088561791:web:ec138bb2cbc58536a4ef4a",
  measurementId: "G-31QNL3F6LB"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export {
  firebaseApp,
  db,
  firebase
}