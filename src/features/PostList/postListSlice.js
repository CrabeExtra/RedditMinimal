
export const loadData = (data) => {
    return {
        type: 'postList/loadData',
        payload: data
    };
}

export const loadMore = (data) => {
    return {
        type: 'postList/loadMore',
        payload: data
    };
}

const initialPostList = [];
export const postListReducer = (postList = initialPostList, action) => {
    switch(action.type) {
        case 'postList/loadData': {
            return action.payload;
        }
        case 'postList/loadMore': {
            return [...postList, action.payload];
        }
        default: {
            return postList;
        }
    }
}