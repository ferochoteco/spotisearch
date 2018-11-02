const initialState = {
    breadcrumbs: [{
        url: "/",
        name: "Home",
        type: "home"
    }]
}

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

const breadcrumbs = (state = initialState, action) => {
    switch(action.type) {
        case 'UPDATE_BREADCRUMBS':
            return updateBreacrumbs(state, action);
        default: 
            return state;
    }
}

export default breadcrumbs;