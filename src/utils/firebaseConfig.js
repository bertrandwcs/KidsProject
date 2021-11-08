import firebase from 'firebase';
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAvzTzKYygusNyncHpVdYEYHh6Aesl9t0c",
    authDomain: "kids-project-4a512.firebaseapp.com",
    projectId: "kids-project-4a512",
    databaseURL:"https://kids-project-4a512-default-rtdb.europe-west1.firebasedatabase.app/",
    storageBucket: "kids-project-4a512.appspot.com",
    messagingSenderId: "651243961241",
    appId: "1:651243961241:web:07da7d3cde72089bf47108"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();


  export { storage, firebase as default };