import { fetchAlbumSongs } from '../../config/api'

export const FETCH_SONGS_BEGIN = "FETCH_SONGS_BEGIN";
export const FETCH_SONGS_SUCCESS = "FETCH_SONGS_SUCCESS";
export const FETCH_SONGS_FAILURE = "FETCH_SONGS_FAILURE";

export const fetchSongsBegin = () => ({
    type: FETCH_SONGS_BEGIN
});

export const fetchSongsSuccess = (songs) => ({
    type: FETCH_SONGS_SUCCESS,
    payload: { songs }
});

export const fetchSongsFailure = (error) => ({
    type: FETCH_SONGS_FAILURE,
    payload: { error }
});

export function fetchSongs(artistId) {
    return dispatch => {
        dispatch(fetchSongsBegin());
        return fetchAlbumSongs(artistId)
                .then(json => {
                    dispatch(fetchSongsSuccess(json.items));
                    return json.items;
                })
                .catch(error =>
                    dispatch(fetchSongsFailure(error))
                );
    };
}
