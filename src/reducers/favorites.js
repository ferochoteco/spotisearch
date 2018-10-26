const initialState = {
    songs: ["asd"],
    favSongs: []
}

const favorites = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_SONGS':
            return {
                ...state,
                songs: action.songs
            }
        case 'ADD_FAV_SONG':
            return [
                ...state,
                {
                    id: action.song.id,
                    album: action.album,
                    name: action.song.name,
                    artist: action.song.artists[0].name
                }
            ]
        default: 
            return state;
    }
}

export default favorites;