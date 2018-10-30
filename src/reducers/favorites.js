const initialState = {
    songs: [],
    albums: [],
    artists: [],
    favSongs: []
}

// const findMatchId = (element) => {
//     return element.id === this
// }

// const addFavSong = (songs, songid) => {
//     songs.findIndex(findMatchId, songid);
// }

const favorites = (state = initialState, action) => {
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
        case 'ADD_FAV_SONG':
            return {
                ...state,
                favSongs: [...state.favSongs, {
                    name: action.song.name,
                    id: action.song.id,
                    album: action.data.albumName,
                    albumUrl: action.data.albumImgUrl,
                    artist: action.data.artistName
                }]
            }
        case 'REMOVE_FAV_SONG':
            return {
                ...state,
                favSongs: [...state.favSongs.filter(song => song.id !== action.songId)]
            }
        default: 
            return state;
    }
}

export default favorites;