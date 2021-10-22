// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD11JG_Aqimp6drwsazs-kGNjOl0T1ffoo",
  authDomain: "cruze-auth.firebaseapp.com",
  projectId: "cruze-auth",
  storageBucket: "cruze-auth.appspot.com",
  messagingSenderId: "804047206744",
  appId: "1:804047206744:web:7d6fab795b9a6428454d2d",
};

// Initialize Firebase
let app;
if (firebase && firebase.apps && firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
