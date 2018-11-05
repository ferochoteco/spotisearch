import { fetchArtistAlbums } from '../../config/api'

export const FETCH_ALBUMS_BEGIN = "FETCH_ALBUMS_BEGIN";
export const FETCH_ALBUMS_SUCCESS = "FETCH_ALBUMS_SUCCESS";
export const FETCH_ALBUMS_FAILURE = "FETCH_ALBUMS_FAILURE";

export const fetchAlbumsBegin = () => ({
    type: FETCH_ALBUMS_BEGIN
});

export const fetchAlbumsSuccess = (albums) => ({
    type: FETCH_ALBUMS_SUCCESS,
    payload: { albums }
});

export const fetchAlbumsFailure = (error) => ({
    type: FETCH_ALBUMS_FAILURE,
    payload: { error }
});

export function fetchAlbums(artistId) {
    return dispatch => {
        dispatch(fetchAlbumsBegin());
        return fetchArtistAlbums(artistId)
                .then(json => {
                    dispatch(fetchAlbumsSuccess(json.items));
                    return json.items;
                })
                .catch(error =>
                    dispatch(fetchAlbumsFailure(error))
                );
    };
}
