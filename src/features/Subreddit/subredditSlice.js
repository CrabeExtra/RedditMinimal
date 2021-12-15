
export const setSubreddit = (data, search) => {
    return {
        type: 'subreddit/setSubreddit',
        payload: { data, search }
    };
}

const initialSubreddit = '';
export const subredditReducer = (subreddit = initialSubreddit, action) => {
    switch(action.type) {
        case 'subreddit/setSubreddit': {
            return action.payload;
        }
        default: {
            return subreddit;
        }
    }
}
