// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import App from './components/App';
import Home from './components/Home';
import ArtistsList from './components/ArtistsList';
import Songs from './components/Songs';
import Artist from './components/Artist';

const AppRoutes = () =>
  <App>
    <Switch>
      <Route exact path="/albums/:album" component={Songs} />
      <Route exact path="/artists/:artist" component={Artist} />
      <Route exact path="/search/:artist" component={ArtistsList} />
      <Route exact path="/" component={Home} />
    </Switch>
  </App>;

export default AppRoutes;
