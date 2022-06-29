import { createStore } from 'redux';
import reducers from './reducers/index.js';

import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(
    reducers,
    composeWithDevTools()
);

export default store;