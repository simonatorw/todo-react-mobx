import toDoReducer from '../../app/redux/store/reducers/toDoReducer';

describe('Todo reducer actions', () => {
    test('It can add item to list', () => {
        const state = { list: [1] };
        const action = { type: 'ADD_TODO', item: 2 };
        const newState = toDoReducer(state, action);
        expect(newState.list.length).toEqual(2);
    });
    test('It can remove item from list', () => {
        const state = { list: [1] };
        const action = { type: 'REMOVE_TODO', idx: 0 };
        const newState = toDoReducer(state, action);
        expect(newState.list.length).toEqual(0);
    });
    test('It adds the correct item', () => {
        const state = { list: [1] };
        const action = { type: 'ADD_TODO', item: 'simon' };
        const newState = toDoReducer(state, action);
        expect(newState.list[newState.list.length - 1]).toEqual('simon');
    });     
});