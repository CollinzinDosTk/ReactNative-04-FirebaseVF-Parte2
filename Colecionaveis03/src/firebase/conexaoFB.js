import firebase from 'firebase';
import 'firebase/firestore';
var firebaseConfig = {
    apiKey: "AIzaSyBu2lk_pbfqNL5LY7G0q5hbNmJzQdYY1aY",
    authDomain: "colecionaveisfb-ee5bb.firebaseapp.com",
    projectId: "colecionaveisfb-ee5bb",
    databaseURL: "https://colecionaveisfb-ee5bb.firebaseio.com",
    storageBucket: "colecionaveisfb-ee5bb.appspot.com",
    messagingSenderId: "166768583593",
    appId: "1:166768583593:web:f9b15a68b696e29d0ddab8",
    measurementId: "G-PY62VN2E8L" 
  };
var app = firebase.initializeApp(firebaseConfig);

export const conexaoFS = app.firestore();
