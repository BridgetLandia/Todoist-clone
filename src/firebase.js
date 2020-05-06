import firebase from 'firebase/app';
import 'firebase/firestore';

<<<<<<< HEAD
const firebaseConfig = firebase.initializeApp({});
=======
const firebaseConfig = firebase.initializeApp({
	apiKey: '',
	authDomain: '',
	databaseURL: '',
	projectId: '',
	storageBucket: '',
	messagingSenderId: '',
	appId: ''
});
>>>>>>> eef65ac7dca801aa5aac331a68d609a5dca67a7b

export { firebaseConfig as firebase };
