import React, { Component } from 'react';
import { object } from 'prop-types';
import { observer } from 'mobx-react';

import Shim from './Shim';

@observer
export default class Header extends Component {
	
	static propTypes = {
		store: object
	};
	componentWillUpdate() {
		console.log('Update from header');
	}	
	render() {		
		return (
			<div>
				<Shim store={this.props.store} />
			</div>
		);
	}
}