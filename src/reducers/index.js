import { combineReducers } from 'redux'

import favorites from './favorites';
import artistsReducer from '../components/ArtistsList/artistsReducer';
import breadcrumbsReducer from '../components/Breadcrumbs/breadcrumbsReducer';
import albumsReducer from '../components/AlbumsList/albumsReducer';
import songsReducer from '../components/SongsList/songsReducer';

const reducers = combineReducers({
    favorites,
    breadcrumbsReducer,
    artistsReducer,
    albumsReducer,
    songsReducer
});

export default reducers;