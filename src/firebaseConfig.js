// src/firebaseConfig.js
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCNGofDYcbVBmWvuKXIL2MF-eBT72QROug",
    authDomain: "soy-audio-283112.firebaseapp.com",
    projectId: "soy-audio-283112",
    storageBucket: "soy-audio-283112.appspot.com",
    messagingSenderId: "583652906540",
    appId: "1:583652906540:web:c719d76d85ced786dde389",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
