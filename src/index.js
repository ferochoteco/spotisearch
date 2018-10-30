// Dependencies
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import reducers from './reducers'

// Routes
import AppRoutes from './routes';

// Assets
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const localStorageMiddleware = ({getState}) => {
    return (next) => (action) => {
        const result = next(action);
        localStorage.setItem('applicationState', JSON.stringify(
            getState()
        ));
        return result;
    };
};

const store = compose(applyMiddleware(localStorageMiddleware))(createStore)(
    reducers,
    localStorage.getItem('applicationState') ? JSON.parse(localStorage.getItem('applicationState')) : ''
);  

render(
    <Provider store={store}>
        <Router>
            <AppRoutes />
        </Router>
    </Provider>,
    document.getElementById('root')
);
