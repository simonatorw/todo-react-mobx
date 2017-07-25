import React, { Component } from 'react';
//import { object } from 'prop-types';
import { connect } from 'react-redux';
import { computeCount } from './utils/computeCount';
import { addToDo, removeToDo } from './store/actions/action-creators';

function mapStateToProps(store) {
	return {
		list: store.list
	};
}

function mapDispatchToProps(dispatch, ownProps) {
	return {
		add: function(e) {
			e.preventDefault();
		
			if (e.target.value && e.keyCode === 13) {
				dispatch(addToDo(e.target.value));
				e.target.value = '';
			}
		},
		remove: function(i) {
			dispatch(removeToDo(i));
		}
	}
}

export function ReAppTpl({ add, remove, list }) {

	const todoList = list.map((todo, i) => (
		<li key={'key' + '_' + i} onClick={remove.bind(this, i)}>{todo}</li>
	));
	return (		
		<div>
			<input type="text" onKeyUp={add} placeholder="Add item..." />
			<ul>{todoList}</ul>
			<div>{computeCount(list)} item(s) in list.</div>
		</div>
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(ReAppTpl);