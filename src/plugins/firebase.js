import firebase from 'firebase';
import "firebase/auth";

const config = {

};

export const firebaseApp = firebase.initializeApp(config);
export const firestore = firebaseApp.firestore();