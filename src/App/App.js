import React from 'react';
import './../index.css';
//import PlaceHolder from './../features/placeHolder/placeHolder';
import PostList from './../features/PostList/PostList';
import Searchbar from './../features/Searchbar/Searchbar';

/**
 * 
 * displays the entire app as the sum of its features.
 */
const App = (props) => {

  const { state, dispatch } = props;
  return (
    <div className="App">
      <Searchbar 
        text={state.text}
        dispatch={dispatch}
      />
      <PostList
        postList={state.postList}
        subreddit={state.subreddit}
        dispatch={dispatch}
      />
    </div>
  );
}

export default App;
