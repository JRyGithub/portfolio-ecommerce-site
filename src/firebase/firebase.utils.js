import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBpnb6FiFSftvLmMMBD7gtOGpdVUnmAiZQ",
    authDomain: "portfolio-ecommerce-db.firebaseapp.com",
    projectId: "portfolio-ecommerce-db",
    storageBucket: "portfolio-ecommerce-db.appspot.com",
    messagingSenderId: "398335373836",
    appId: "1:398335373836:web:9aa341ad7744e57d163429",
    measurementId: "G-4CHEGPR4E5"
  }

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogleMethod = () => auth.signInWithPopup(provider);

export default firebase;