import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import firebase from "firebase";


// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: "AIzaSyAY01K8E-TU5bod4GTL0crouuHOva4-pi0",
  authDomain: "wishlist-d6ab9.firebaseapp.com",
  projectId: 'wishlist-d6ab9'
});

ReactDOM.render(
    <App />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
