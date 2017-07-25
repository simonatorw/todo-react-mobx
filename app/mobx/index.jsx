import React from 'react';
import { render } from 'react-dom';

import store from './AppStore';
import App from './App';

const elem = document.createElement('div');
elem.setAttribute('id', 'app');
document.body.appendChild(elem);

render(<App store={store} />, document.getElementById('app'));