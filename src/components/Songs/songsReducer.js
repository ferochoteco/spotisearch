import {
    FETCH_SONGS_BEGIN,
    FETCH_SONGS_SUCCESS,
    FETCH_SONGS_FAILURE
} from "./songsActions";

const initialState = {
    songs: [],
    loading: false,
    error: null
};

export default function songsReducer(state = initialState,action) {
    switch (action.type) {
        case FETCH_SONGS_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FETCH_SONGS_SUCCESS:
            return {
                ...state,
                loading: false,
                songs: action.payload.songs
            };
        case FETCH_SONGS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                songs: []
            };
        default:
            return state;
    }
}
