import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDkX8z0YO2rE6jwgZGULYFuC2HZjgAC6lI",
    authDomain: "cyclo-d8612.firebaseapp.com",
    databaseURL: "https://cyclo-d8612.firebaseio.com"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const gitAuthProvider = new firebase.auth.GithubAuthProvider();


