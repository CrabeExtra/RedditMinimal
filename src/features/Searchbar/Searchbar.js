import React, { useEffect, useState } from 'react';
import { setText } from './searchbarSlice';
import { setSubreddit } from './../Subreddit/subredditSlice';

/**
 * 
 * returns a searchbar, through which state variables 'subreddit' and 'text' may be altered, 
 * TODO: ensure subreddit exists before changing subreddit variable
 */


const Searchbar = (props) => {
    const { text, dispatch } = props;

    const [checkForChange, setCheckForChange] = useState(text);

    const onClickHandler = () => {
        dispatch(setSubreddit(text, false));
        
    }

    const onClickHandlerSearch = () => {
        dispatch(setSubreddit(text, true));
    }

    useEffect(() => {
        dispatch(setText(checkForChange));
    }, [checkForChange, dispatch]);

    //todo, add suggested list of subreddits
    return (
        <div id='search'>
            <h3>Search:</h3>
            <input onChange={(e) => setCheckForChange(e.target.value)} id='searchbar'></input>
            <button onClick={onClickHandler} id='subredditButton' type='submit'>Open Subreddit by Name</button>
            <button onClick={onClickHandlerSearch} id='searchButton' type='submit'>Submit Search</button>
        </div>
    );
}

export default Searchbar;