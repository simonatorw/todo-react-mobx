import renderer from 'react-test-renderer';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import ReApp from '../../app/redux/ReApp';

describe('Todo app renders correctly', () => {
    test('Snapshot should be identical', () => {
        const toDoReducer = jest.fn(() => ({ list: [] }));
        const mockStore = configureStore();
        const store = mockStore(toDoReducer);
        const rendered = renderer.create(<Provider store={store}><ReApp /></Provider>);

        expect(rendered.toJSON()).toMatchSnapshot();
    });
});