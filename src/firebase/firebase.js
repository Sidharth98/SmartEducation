import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCyoj3O4NY4xuAE76bZLvOCQuhIuFmcPv4",
    authDomain: "smarted-db.firebaseapp.com",
    databaseURL: "https://smarted-db.firebaseio.com",
    projectId: "smarted-db",
    storageBucket: "smarted-db.appspot.com",
    messagingSenderId: "307834846762",
    appId: "1:307834846762:web:11a23c956e587b73f98d53"
  };

  firebase.initializeApp(config);

  /*export const createUserProfileDocument = async (userAuth, additionalData) => {
      if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch(error) {
            console.log('error creating user',error.message);
        }


    }
    return userRef;
  }

export const auth = firebase.auth();
export const firestore = firebase.firestore();
*/


export default firebase;