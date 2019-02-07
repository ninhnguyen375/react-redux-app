import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAsh3Mpk_GGRJg6_cl5aNBo02V-pEPsL7U",
  authDomain: "elite-totality-229311.firebaseapp.com",
  databaseURL: "https://elite-totality-229311.firebaseio.com",
  projectId: "elite-totality-229311",
  storageBucket: "elite-totality-229311.appspot.com",
  messagingSenderId: "528122939859"
};
firebase.initializeApp(config);

export default firebase;
