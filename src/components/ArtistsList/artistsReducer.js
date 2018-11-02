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
            // Mark the state as "loading" so we can show a spinner or something
            // Also, reset any errors. We're starting fresh.
            return {
                ...state,
                loading: true,
                error: null
            };
        case FETCH_ARTISTS_SUCCESS:
            // All done: set loading "false".
            // Also, replace the items with the ones from the server
            return {
                ...state,
                loading: false,
                artists: action.payload.artists
            };
        case FETCH_ARTISTS_FAILURE:
            // The request failed, but it did stop, so set loading to "false".
            // Save the error, and we can display it somewhere
            // Since it failed, we don't have items to display anymore, so set it empty.
            // This is up to you and your app though: maybe you want to keep the items
            // around! Do whatever seems right.
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                artists: []
            };
        default:
            // ALWAYS have a default case in a reducer
            return state;
    }
}
