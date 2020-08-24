import firebase from 'firebase/app';
import 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIRE_KEY,
  authDomain: 'workforall-e7b9a.firebaseapp.com',
  databaseURL: 'https://workforall-e7b9a.firebaseio.com',
  projectId: 'workforall-e7b9a',
  storageBucket: 'workforall-e7b9a.appspot.com',
  messagingSenderId: process.env.REACT_APP_MESSAGE_ID,
  appId: process.env.REACT_APP_FIRE_ID,
  measurementId: process.env.REACT_APP_MEASURE_ID,
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export {
  storage, firebase as default,
};
