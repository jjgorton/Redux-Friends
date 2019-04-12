import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions';

class Login extends React.Component {
	state = {
		credentials : {
			username : '',
			password : ''
		}
	};

	handleChange = (e) => {
		this.setState({
			credentials : {
				...this.state.credentials,
				[e.target.name]: e.target.value
			}
		});
	};

	login = (e) => {
		e.preventDefault();
		localStorage.clear();
		this.props.login(this.state.credentials).then(() => {
			this.props.history.push('/classified');
		});
	};

	render() {
		return (
			<div className="login-form-wrapper">
				<form onSubmit={this.login}>
					<input
						type="text"
						name="username"
						placeholder="Username"
						value={this.state.credentials.username}
						onChange={this.handleChange}
					/>
					<input
						type="password"
						name="password"
						placeholder="Password"
						value={this.state.credentials.password}
						onChange={this.handleChange}
					/>
					<button>Login</button>
					{this.props.error && <p className="error">{this.props.error}</p>}
				</form>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	error     : state.error,
	loggingIn : state.loggingIn
});

export default connect(mapStateToProps, { login })(Login);
