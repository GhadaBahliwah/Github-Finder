import React from 'react';
import {render} from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import registerServiceWorker from './registerServiceWorker';
// import createDebounce from 'redux-debounced';
import reducer from './redusers/reducer';
import './index.css';
import App from './App';


//const enhancer = applyMiddleware(createDebounce(),thunkMiddleware, logger);
let store = createStore(reducer, applyMiddleware(thunk, logger));
console.log(store.getState());

render(<Provider store={store}> <App /> </Provider>,
 document.getElementById('root')
 )

registerServiceWorker();