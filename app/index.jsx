import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import store from './mobx/AppStore';
import App from './mobx/App';
import ReApp from './redux/ReApp';
import toDoReducer from './redux/store/reducers/toDoReducer';

const elem = document.createElement('div');
elem.setAttribute('id', 'app');
document.body.appendChild(elem);

const reStore = createStore(toDoReducer);

class AppSwitch extends Component {
    state = {
        showMobx: false
    };

    show(swi, e) {
        e.preventDefault();

        this.setState({ showMobx: swi });
    }

    render() {
        return(
            <div>
                <ul>
                    <li><a href="#" onClick={this.show.bind(this, 0)}>Redux</a></li>
                    <li><a href="#" onClick={this.show.bind(this, 1)}>Mobx</a></li>
                </ul>
                { !!this.state.showMobx && <App store={store} /> }
                { !this.state.showMobx && <Provider store={reStore}><ReApp /></Provider> }
            </div>
        );
    }

}

render(
    <AppSwitch />, 
    document.getElementById('app'));