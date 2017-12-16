import { mount } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import ReApp from '../../app/redux/ReApp';
import toDoReducer from '../../app/redux/store/reducers/toDoReducer';

describe('Todo app renders correctly', () => {
    let li;
    let wrapper;
    beforeEach(() => {
        const store = createStore(toDoReducer);
        wrapper = mount(<Provider store={store}><ReApp /></Provider>);
        li = wrapper.find('li');
    });
    test('Should display default todo', () => {
        expect(li.length).toBe(1);
    });
    test('Should display "simon"', () => {
        //console.log(li.text());
        expect(li.text()).toEqual('simon');
    });
    test('Should add an item', () => {
        const input = wrapper.find('input');
        input.get(0).value = 'joe';
        input.simulate('keyUp', { keyCode: 13 });
        const li = wrapper.find('li');
        const last = li.last();
        expect(li.length).toEqual(2);
        expect(last.text()).toEqual('joe');
    });
    test('Should remove an item', () => {
        li.simulate('click');
        li = wrapper.find('li');
        expect(li.length).toEqual(0);
    });
    test('Should not add an item w/o enter key pressed', () => {
        const input = wrapper.find('input');
        input.get(0).value = 'joe';
        input.simulate('keyUp', { keyCode: 1 });
        const li = wrapper.find('li');
        const last = li.last();
        expect(li.length).toEqual(1);
    });        
});