import { fetchArtistsSearch } from '../../config/api'

export const FETCH_ARTISTS_BEGIN = "FETCH_ARTISTS_BEGIN";
export const FETCH_ARTISTS_SUCCESS = "FETCH_ARTISTS_SUCCESS";
export const FETCH_ARTISTS_FAILURE = "FETCH_ARTISTS_FAILURE";

export const fetchArtistsBegin = () => ({
    type: FETCH_ARTISTS_BEGIN
});

export const fetchArtistsSuccess = (artists) => ({
    type: FETCH_ARTISTS_SUCCESS,
    payload: { artists }
});

export const fetchArtistsFailure = (error) => ({
    type: FETCH_ARTISTS_FAILURE,
    payload: { error }
});

export function fetchArtists(artistSearch) {
    return dispatch => {
        dispatch(fetchArtistsBegin());
        return fetchArtistsSearch(artistSearch)
                .then(json => {
                    dispatch(fetchArtistsSuccess(json.artists.items));
                    return json.artists.items;
                })
                .catch(error =>
                    dispatch(fetchArtistsFailure(error))
                );
    };
}
