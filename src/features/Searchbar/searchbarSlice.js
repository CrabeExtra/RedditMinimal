
export const setText = (data) => {
    return {
        type: 'searchbar/search',
        payload: data
    };
}

const initialSearchbar = '';
export const searchbarReducer = (searchbar = initialSearchbar, action) => {
    switch(action.type) {
        case 'searchbar/search': {
            return action.payload;
        }
        default: {
            return searchbar;
        }
    }
}
