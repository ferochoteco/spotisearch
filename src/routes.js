// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import App from './components/App';
import Album from './views/Album/Album';
import Artist from './views/Artist/Artist';
import Home from './views/Home/Home';
import SearchResults from './views/SearchResults/SearchResults';

const AppRoutes = () =>
  <App>
    <Switch>
      <Route exact path="/albums/:album" component={Album} />
      <Route exact path="/artists/:artist" component={Artist} />
      <Route exact path="/search/:artist" component={SearchResults} />
      <Route exact path="/" component={Home} />
    </Switch>
  </App>;

export default AppRoutes;
