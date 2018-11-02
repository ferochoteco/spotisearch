const initialState = {
    songs: [],
    albums: [],
    artists: []
}

// const findMatchId = (element) => {
//     return element.id === this
// }

// const addFavSong = (songs, songid) => {
//     songs.findIndex(findMatchId, songid);
// }

const fetchData = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_SONGS':
            return {
                ...state,
                songs: action.songs
            }
        case 'FETCH_ALBUMS':
            return {
                ...state,
                albums: action.albums
            }
        case 'FETCH_ARTISTS':
            return {
                ...state,
                artists: action.artists
            }
        default: 
            return state;
    }
}

export default fetchData;