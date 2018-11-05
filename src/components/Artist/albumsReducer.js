import {
    FETCH_ALBUMS_BEGIN,
    FETCH_ALBUMS_SUCCESS,
    FETCH_ALBUMS_FAILURE
} from "./albumsActions";

const initialState = {
    albums: [],
    loading: false,
    error: null
};

export default function albumsReducer(state = initialState,action) {
    switch (action.type) {
        case FETCH_ALBUMS_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FETCH_ALBUMS_SUCCESS:
            return {
                ...state,
                loading: false,
                albums: action.payload.albums
            };
        case FETCH_ALBUMS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                albums: []
            };
        default:
            return state;
    }
}
