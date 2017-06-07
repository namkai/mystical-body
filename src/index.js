import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import 'rxjs';
import './style/v4/dist/toolkit.css';
import App from './components/App';
import Login from './components/Login';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
import './style/index.css';
const history = createBrowserHistory();
const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<div>
				<Route path="/" component={App}/>
				<Route path="/login" component={Login}/>
			</div>
		</Router>
	</Provider>,
	document.getElementById('root'));
registerServiceWorker();
