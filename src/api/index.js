import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDIUl5hND6Yeflu6tOHYqCGoSV5cLINH2A',
  authDomain: 'dict-d3357.firebaseapp.com',
  databaseURL: 'https://dict-d3357.firebaseio.com',
  projectId: 'dict-d3357',
  storageBucket: 'dict-d3357.appspot.com',
  messagingSenderId: '489509330039',
  appId: '1:489509330039:web:5224d10c1be6a85a'
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
const fireauth = firebase.auth();

export { firebase as default, firestore, fireauth };
