import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import './App.css';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';
import AccessDedied from './components/AccessDenied';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<h1>Friends</h1>
					<nav>
						<NavLink to="/login">Login</NavLink>
						<NavLink to="/classified">Top Secret</NavLink>
					</nav>
					<Route path="/login" component={Login} />
					<Route path="/access-denied" component={AccessDedied} />
					<PrivateRoute exact path="/classified" component={FriendsList} />
				</div>
			</Router>
		);
	}
}

export default App;
