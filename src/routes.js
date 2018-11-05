// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import App from './components/App';
import Artist from './views/Artist/Artist';
import Home from './components/Home';
import SearchResults from './views/SearchResults/SearchResults';
import Songs from './components/Songs';

const AppRoutes = () =>
  <App>
    <Switch>
      <Route exact path="/albums/:album" component={Songs} />
      <Route exact path="/artists/:artist" component={Artist} />
      <Route exact path="/search/:artist" component={SearchResults} />
      <Route exact path="/" component={Home} />
    </Switch>
  </App>;

export default AppRoutes;
