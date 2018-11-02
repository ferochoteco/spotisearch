import { combineReducers } from 'redux'

import favorites from './favorites';
import breadcrumbs from './breadcrumbs';
import artistsReducer from '../components/ArtistsList/artistsReducer';

const reducers = combineReducers({
    favorites,
    breadcrumbs,
    artistsReducer
});

export default reducers;