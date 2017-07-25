import ACTIONS from './action-types';

export function addToDo(item) {
	return {
		type: ACTIONS.ADD_TODO,
		item
	};
}

export function removeToDo(idx) {
	return {
		type: ACTIONS.REMOVE_TODO,
		idx
	};
}