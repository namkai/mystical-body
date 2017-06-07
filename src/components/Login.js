import firebase from 'firebase';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authenticate } from '../actions/authentication_actions';
import { addUserData } from '../actions/user_actions';
import logo from '../style/v4/docs/assets/img/brand.png';
import FacebookAuth from './FacebookAuth';

class LoginForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			error: '',
		};
	}

	static contextTypes = {
		router: React.PropTypes.object,
	};

	componentWillMount() {
		firebase.auth().onAuthStateChanged(user => {
			if (user) {
				console.log(`i'm here!`, user);
				this.props.addUserData(user);
				this.props.authenticate(true);
				this.redirect();
			}
		});
	}

	onButtonPress = (event) => {
		event.preventDefault();
		const { email, password } = this.state;
		console.log(email, password);

		try {
			firebase.auth().signInWithEmailAndPassword(email, password).then((response) => {
				this.props.authenticate(true);
				this.redirect();
			});
		}
		catch (error) {
			console.log('i\'m the error', error);
			this.setState({ error: 'LogIn Failed.' });
		}
	};
	redirect = () => {
		this.context.router.history.push('/feed');
	};

	render() {
		return (
			<div className="container-fluid container-fill-height">
				<div className="container-content-middle">
					<form className="mx-auto text-center app-login-form" style={ { marginBottom: 150 } }>
						<a href="../index.html" className="app-brand mb-5">
							<img src={ logo } alt="brand" style={ { height: 30, marginBottom: 20 } }/>
						</a>

						<div className="form-group">
							<input
								style={ style.inputStyle }
								type="email"
								className="form-control"
								placeholder="Email"
								value={ this.state.email }
								onChange={e => this.setState({ email: e.target.value })}
							/>
						</div>

						<div className="form-group mb-3">
							<input
								style={ style.inputStyle }
								type="password" className="form-control"
								placeholder="Password"
								value={ this.state.password }
								onChange={e => this.setState({ password: e.target.value })}
							/>
						</div>
						<div className="form-group mb-3">
							<FacebookAuth/>
						</div>
						<div className="mb-5">
							<button className="btn btn-primary" onClick={ this.onButtonPress }>Log In</button>
							<button className="btn btn-secondary">Sign up</button>
						</div>
						<div className="mb-5">
							<p style={style.errorTextStyle}>{this.state.error}</p>
						</div>

						<footer className="screen-login">
							<a href="#" className="text-muted">Forgot password</a>
						</footer>
					</form>
				</div>
			</div>
		)
			;
	}
}

const style = {
	inputStyle: {
		width: '20%',
		margin: '0 auto',
	},
	errorTextStyle: {
		alignSelf: 'center',
		color: 'red',
		fontWeight: 'bold',
	},
};

export default connect(null, { authenticate, addUserData })(LoginForm);
