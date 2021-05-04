import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA5u3TtU39sAuUi4D78kFFVM9xHQYQ45Eo",
    authDomain: "face-book-clone-6e282.firebaseapp.com",
    projectId: "face-book-clone-6e282",
    storageBucket: "face-book-clone-6e282.appspot.com",
    messagingSenderId: "889756973518",
    appId: "1:889756973518:web:d207d068f0c01174a2139f",
    measurementId: "G-4NW9YNNM5W"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();
  export {auth,provider};
  export default db;