import firebase from 'firebase';
import React from 'react';

const FacebookAuth = ({ redirect, authenticate }) => {
	const signIn = () => {
		const provider = new firebase.auth.FacebookAuthProvider();
		firebase.auth().signInWithPopup(provider).then((result) => {
			authenticate(true);
			const token = result.credential.accessToken;
			window.localStorage.setItem('PostGrad', token);
			redirect();
			// This gives you a Google Access Token. You can use it to access the Google API.
			// The signed-in user info.
			const currentUser = result.user;
		}).catch((error) => {
			// Handle Errors here.
			const errorCode = error.code;
			const errorMessage = error.message;
			// The email of the user's account used.
			const email = error.email;
			// The firebase.auth.AuthCredential type that was used.
			const credential = error.credential;
			// ...
		});
	};
	return (
		<button className="btn btn" type="button" onClick={() => signIn()}>
			<span className="icon icon-facebook" />
			<span /> Sign in with Facebook
		</button>
	);
};

export default FacebookAuth
