// Dependencies
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'

// Routes
import AppRoutes from './routes';

// Assets
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const store = createStore(reducers);

render(
    <Provider store={store}>
        <Router>
            <AppRoutes />
        </Router>
    </Provider>,
    document.getElementById('root')
);
