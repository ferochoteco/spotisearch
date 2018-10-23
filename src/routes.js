// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import Albums from './components/Albums';
import Artists from './components/Artists';

const AppRoutes = () =>
  <App>
    <Switch>
      <Route exact path="/about" component={About} />
      <Route exact path="/albums/:artist" component={Albums} />
      <Route exact path="/artists/:artist" component={Artists} />
      <Route exact path="/" component={Home} />
    </Switch>
  </App>;

export default AppRoutes;
