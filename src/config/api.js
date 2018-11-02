import apiConfig from './index';

// Handle HTTP errors since fetch won't.
const handleErrors = (response) => {
    if (!response.ok) {
        throw Error(response.statusText);
    }
        return response;
}

const fetchData = (url) => {
    return fetch(url, apiConfig.api.options)
        .then(handleErrors)
        .then(response => response.json())
        .catch(error => console.error(error)) 
}

export const fetchArtistsSearch = (artist) => {
    const url = apiConfig.api.url + "search?q=" + artist + "&type=artist"
    return fetchData(url,apiConfig); 
}

export const fetchArtist = (idArtist) => {
    const url = apiConfig.baseUrl + "artists/" + idArtist; 
    return fetchData(url,apiConfig); 
}

export const fetchArtistAlbums = (idArtist) => {
    const url = apiConfig.baseUrl + "artists/" + idArtist + "/albums?include_groups=single%2Calbum&market=ES&limit=25"; 
    return fetchData(url,apiConfig); 
}

export const fetchAlbum = (idAlbum) => {
    const url = apiConfig.baseUrl + "albums/" + idAlbum; 
    return fetchData(url,apiConfig); 
}

export const fetchAlbumTracks = (idAlbum) => {
    const url = apiConfig.baseUrl + "albums/" + idAlbum + "/tracks"; 
    return fetchData(url,apiConfig); 
}