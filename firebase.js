import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD11JG_Aqimp6drwsazs-kGNjOl0T1ffoo",
  authDomain: "cruze-auth.firebaseapp.com",
  projectId: "cruze-auth",
  storageBucket: "cruze-auth.appspot.com",
  messagingSenderId: "804047206744",
  appId: "1:804047206744:web:7d6fab795b9a6428454d2d",
};

let app;
if (firebase && firebase.apps && firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
