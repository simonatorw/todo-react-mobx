import toDoReducer from '../../app/redux/store/reducers/toDoReducer';
import stateTree from '../../app/redux/store/stateTree';

describe('Todo reducer actions', () => {
    test('It can add item to list', () => {
        const state = { list: [1] };
        const action = { type: 'ADD_TODO', item: 2 };
        const result = toDoReducer(state, action);
		
        expect(result.list.length).toEqual(2);
    });
	
    test('It can remove item from list', () => {
        const state = { list: [1] };
        const action = { type: 'REMOVE_TODO', idx: 0 };
        const result = toDoReducer(state, action);
		
        expect(result.list.length).toEqual(0);
    });
	
    test('It adds the correct item', () => {
        const state = { list: [1] };
        const action = { type: 'ADD_TODO', item: 'simon' };
        const result = toDoReducer(state, action);
		
        expect(result.list[result.list.length - 1]).toEqual('simon');
    });

    test('It will return default state by default', () => {
		const action = { type: 'foo' };
        const result = toDoReducer(undefined, action);
		const expected = stateTree;
		
        expect(result).toEqual(expected);
    });	
});