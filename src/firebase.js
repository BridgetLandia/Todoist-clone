import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
	apiKey: 'AIzaSyDuOIZzdm16_kbV4t067UYwZdnZiOMSyVc',
	authDomain: 'todoist-737e9.firebaseapp.com',
	databaseURL: 'https://todoist-737e9.firebaseio.com',
	projectId: 'todoist-737e9',
	storageBucket: 'todoist-737e9.appspot.com',
	messagingSenderId: '621906808444',
	appId: '1:621906808444:web:44f13feb0cb8102bd403f9'
});

export { firebaseConfig as firebase };
