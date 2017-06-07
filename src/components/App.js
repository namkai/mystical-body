import React, { PureComponent } from 'react';
import initializeFirebase from '../firebase/initializeFirebase';
import Navbar from './Navbar';

class App extends PureComponent {
	componentWillMount() {
		initializeFirebase();
	}

	render() {
		return (
			<div className="App">
				<Navbar/>
			</div>
		);
	}
}

export default App;
