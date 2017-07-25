import React, { Component } from 'react';
import { object } from 'prop-types';
import { observer } from 'mobx-react';

import Header from './Header';

@observer
export default class App extends Component {
	
	static propTypes = {
		store: object
	};
	componentWillUpdate() {
		console.log('Update from app');
	}
	add(e) {
		e.preventDefault();
		
		this.props.store.addToList(this.val.value);
		this.val.value = '';
	}
	remove(i) {
		this.props.store.removeFromList(i);
	}	
	render() {		
		const todoList = this.props.store.todos.map((todo, i) => (
			<li key={todo + ' ' + i} onClick={this.remove.bind(this, i)}>{todo}</li>
		));
		return (
			<div>
				<Header store={this.props.store} />
				<form onSubmit={this.add.bind(this)}>
					<input type="text" ref={(val) => this.val = val} placeholder="Add item..." />
				</form>
				<ul>{todoList}</ul>
			</div>
		);
	}
}