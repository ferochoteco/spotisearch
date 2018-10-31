const initialState = {
    songs: [],
    albums: [],
    artists: [],
    favSongs: [],
    breadcrumbs: [{
        url: "/",
        name: "Home",
        type: "home"
    }]
}

// const findMatchId = (element) => {
//     return element.id === this
// }

// const addFavSong = (songs, songid) => {
//     songs.findIndex(findMatchId, songid);
// }

const updateBreacrumbs = (state = initialState, action) => {
    switch(action.item.type) {
        case 'home':
            return {
                ...state,
                breadcrumbs: [{
                    url: "/",
                    name: "Home",
                    type: "home"
                }]
            }
        case 'search':
            return {
                ...state,
                breadcrumbs: [...state.breadcrumbs.slice(0,1).concat({
                    url: action.item.url,
                    name: action.item.name,
                    type: action.item.type
                })]
            }
        case 'artist':
            return {
                ...state,
                breadcrumbs: [...state.breadcrumbs.slice(0,2).concat({
                    url: action.item.url,
                    name: action.item.name,
                    type: action.item.type
                })]
            }
        case 'album':
            return {
                ...state,
                breadcrumbs: [...state.breadcrumbs.slice(0,3).concat({
                    url: action.item.url,
                    name: action.item.name,
                    type: action.item.type
                })]
            }
        default:
            return state;
    }
}

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
        case 'FETCH_ARTISTS':
            return {
                ...state,
                artists: action.artists
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
        case 'UPDATE_BREADCRUMBS':
            return updateBreacrumbs(state, action);
        default: 
            return state;
    }
}

export default favorites;