import {
    FETCH_ARTISTS_BEGIN,
    FETCH_ARTISTS_SUCCESS,
    FETCH_ARTISTS_FAILURE
} from "./artistsActions";

const initialState = {
    artists: [],
    loading: false,
    error: null
};

export default function artistsReducer(state = initialState,action) {
    switch (action.type) {
        case FETCH_ARTISTS_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FETCH_ARTISTS_SUCCESS:
            return {
                ...state,
                loading: false,
                artists: action.payload.artists
            };
        case FETCH_ARTISTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                artists: []
            };
        default:
            return state;
    }
}
