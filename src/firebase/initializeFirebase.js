import firebase from 'firebase';

export default function () {
	firebase.initializeApp({
		apiKey: 'AIzaSyCaWGSY5MYATwyvK-jdM8KdrDZcUnbUY28',
		authDomain: 'mysticalbody-3a9f2.firebaseapp.com',
		databaseURL: 'https://mysticalbody-3a9f2.firebaseio.com',
		projectId: 'mysticalbody-3a9f2',
		storageBucket: 'mysticalbody-3a9f2.appspot.com',
		messagingSenderId: '858201695778',
	});
}
