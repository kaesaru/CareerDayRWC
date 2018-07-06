import Rebase from 're-base';
import firebase from 'firebase';

// Initialize Firebase
const configDB = {
  apiKey: "AIzaSyAjdo7kuCRKnnVqDiVC5ewNlIbNP24JAPU",
  authDomain: "career-day.firebaseapp.com",
  databaseURL: "https://career-day.firebaseio.com",
  projectId: "career-day",
  //storageBucket: "career-day.appspot.com",
  //messagingSenderId: "267609104779"
};

const app = firebase.initializeApp(configDB);
const base = Rebase.createClass(app.database());

export default base ;