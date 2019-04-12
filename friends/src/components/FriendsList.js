import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchData } from '../actions/index';
import { Friend } from './Friend';

class FriendsList extends React.Component {
	componentDidMount() {
		this.props.fetchData();
	}

	render() {
		return (
			<div>
				<h1>Secret Agents</h1>
				<div className="wrapper">
					{console.log('insideRender', this.props.friends)}
					{this.props.friends.map((friend, index) => <Friend key={index} info={friend} />)}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	friends      : state.friends,
	fetchingData : state.fetchingData
});

export default connect(mapStateToProps, { fetchData })(FriendsList);
