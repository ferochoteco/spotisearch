import { combineReducers } from 'redux'

import favorites from './favorites';
import breadcrumbs from './breadcrumbs';
import artistsReducer from '../components/ArtistsList/artistsReducer';
import albumsReducer from '../components/Artist/albumsReducer';
import songsReducer from '../components/Songs/songsReducer';

const reducers = combineReducers({
    favorites,
    breadcrumbs,
    artistsReducer,
    albumsReducer,
    songsReducer
});

export default reducers;