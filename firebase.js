import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBZzAjmCEqvEaLq0XSjWSL5_5cNaI8GAbE",
    authDomain: "chating-app-cab96.firebaseapp.com",
    projectId: "chating-app-cab96",
    storageBucket: "chating-app-cab96.appspot.com",
    messagingSenderId: "632018874281",
    appId: "1:632018874281:web:377e6a7746c0aca7ff1eb8"
  };

  let app;
  if(firebase.apps.length === 0){
    app =firebase.initializeApp(firebaseConfig);
  }
  else{
    app = firebase.app()
  }
  const db =app.firestore();
  const auth = firebase.auth();
  export {db, auth};