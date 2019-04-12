import React from 'react';

export const Friend = (props) => {
	return (
		<li className="friend">
			<h2>Agent: {props.info.name}</h2>
			<p>{props.info.age} years</p>
			<p>email: {props.info.email}</p>
		</li>
	);
};
