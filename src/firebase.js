// @ts-nocheck
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
	apiKey: "AIzaSyAOChKuVp9-UWfvt_1FcFYdhwBKdVzFl1w",
	authDomain: "firstone-54812.firebaseapp.com",
	databaseURL: "https://firstone-54812-default-rtdb.firebaseio.com",
	projectId: "firstone-54812",
	storageBucket: "firstone-54812.appspot.com",
	messagingSenderId: "94230565344",
	appId: "1:94230565344:web:0605090337330c8eb11b85",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth();

export { db, auth };
