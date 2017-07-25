import React, { Component } from 'react';
import { object } from 'prop-types';
import { observer } from 'mobx-react';

@observer
export default class Shim extends Component {
	
	static propTypes = {
		store: object
	};
	componentWillUpdate() {
		console.log('Update from Shim');
	}	
	render() {		
		return (
			<div>
				{this.props.store.todos}
			</div>
		);
	}
}