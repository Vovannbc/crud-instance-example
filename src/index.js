import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getDatabase } from 'firebase/database';

// Initialize Cloud Firestore through Firebase
export const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAY01K8E-TU5bod4GTL0crouuHOva4-pi0',
  authDomain: 'wishlist-d6ab9.firebaseapp.com',
  projectId: 'wishlist-d6ab9'
});

// export const firestore = firebase.default.firestore();
export const database = getDatabase(firebaseApp);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
