import { createStore, combineReducers } from 'redux';
import { postListReducer } from './../features/PostList/postListSlice';
import { searchbarReducer } from './../features/Searchbar/searchbarSlice';
import { subredditReducer } from './../features/Subreddit/subredditSlice';
// import other features
/**
 * generates the state store of the app to be used throughout persistently
 */
const reducers = {
    postList: postListReducer,
    text: searchbarReducer,
    subreddit: subredditReducer
    //other reducers
}
const store = createStore(combineReducers(reducers));

export default store;