const initialState = {
    favSongs: []
}

const favorites = (state = initialState, action) => {
    switch(action.type) {
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