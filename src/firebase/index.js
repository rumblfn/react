import firebase from "firebase";

const config = {
    apiKey: "AIzaSyDqFRSeLKQXrwvyPEBzz5NQ8e-SF8-ZQ0k",
    authDomain: "messengerumbl.firebaseapp.com",
    databaseURL: "https://messengerumbl-default-rtdb.firebaseio.com",
    projectId: "messengerumbl",
    storageBucket: "messengerumbl.appspot.com",
    messagingSenderId: "942218677017",
    appId: "1:942218677017:web:25097396d0ba06b0d1d388"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const db = firebase.database();
export const rootRef = db.ref('root');
export const chatsRef = rootRef.child('chats')