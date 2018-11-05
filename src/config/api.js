import config from './';

// Handle HTTP errors since fetch won't.
const handleErrors = (response) => {
    if (!response.ok) {
        throw Error(response.statusText);
    }
        return response;
}

const fetchData = (url) => {
    return fetch(url, config.api.options)
        .then(handleErrors)
        .then(response => response.json())
        .catch(error => console.error(error)) 
}

export const fetchArtistsSearch = (artist) => {
    const url = config.api.baseUrl + "search?q=" + artist + "&type=artist";
    return fetchData(url,config); 
}

export const fetchArtist = (idArtist) => {
    const url = config.api.baseUrl + "artists/" + idArtist; 
    return fetchData(url,config); 
}

export const fetchArtistAlbums = (artistId) => {
    const url = config.api.baseUrl + "artists/" + artistId + "/albums?include_groups=album,single"; 
    return fetchData(url,config); 
}

export const fetchAlbum = (idAlbum) => {
    const url = config.api.baseUrl + "albums/" + idAlbum; 
    return fetchData(url,config); 
}

export const fetchAlbumSongs = (albumId) => {
    const url = config.api.baseUrl + "albums/" + albumId + "/tracks"; 
    return fetchData(url,config); 
}
