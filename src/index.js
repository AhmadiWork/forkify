import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import reduxThunk from 'redux-thunk';

import './assets/css/style.css';
import App from './components/App';
import reducers from './redux/reducers';


/**
 * Redux store, middleware and devtools
 */
// Redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Redux store and middleware
const store = createStore(
    reducers,
    {},
    composeEnhancers(applyMiddleware(reduxThunk))
);


/**
 * Render App
 */
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.querySelector('#root')
);