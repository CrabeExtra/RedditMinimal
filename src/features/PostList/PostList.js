import React, { useEffect, useState } from 'react';
import { loadData } from './postListSlice';

/**
 * 
 * returns a list of reddit posts displayed correctly
 */

const PostList = (props) => {
    const { postList, subreddit, dispatch } = props;
    //const [sortBy, setSortBy] = useState('relevance'); // for storing sort-by data if user's are to interact with this variable later
    //const [searchLimit, setSearchLimit] = useState(25); // for storing searchlimit data if user's are to interact with this variable later
    const [exists, setExists] = useState(<p></p>);
    const [loadMoreIter, setLoadMoreIter] = useState(0);
    const sortBy = 'relevance';
    const searchLimit = 25;
    const placeholderURL = 'https://cdn.vox-cdn.com/thumbor/8i-wKl-12cdGNC4U4LF0tzMh3xM=/0x0:640x427/1200x800/filters:focal(0x0:640x427)/cdn.vox-cdn.com/uploads/chorus_image/image/37152424/reddit_logo_640.0.jpg';

    useEffect(() => {
        if(subreddit) {
                if(subreddit.search) {
                    setExists(<p></p>);
                    fetch(`http://www.reddit.com/search.json?q=${subreddit.data}&sort=${sortBy}&limit=${searchLimit+25*loadMoreIter}`)
                    .then(res => res.json())
                    .then(data =>  {
                        console.log(data.data.children.map(data => data.data));
                        dispatch(loadData(data.data.children));
                    })
                    .catch(e => console.log(e));
                } else {
                    setExists(<p></p>);
                    fetch(`http://www.reddit.com/r/${subreddit.data}.json?limit=${searchLimit+25*loadMoreIter}`)
                    .then(res => res.json())
                    .then(data => {
                        console.log(data.data.children.map(data => data.data));
                        dispatch(loadData(data.data.children));
                    })
                    .catch(e => {
                        setExists(<h2 style={{marginTop: 100}}>The entered subreddit does not exist (or some other error)</h2>);
                        return console.log(e);
                    });
                }
        } 
    }, [subreddit, dispatch, loadMoreIter]);
    
    useEffect(() => {
        setLoadMoreIter(0);
    }, [subreddit]);
    
    const loadMoreHandler = () => {
        setLoadMoreIter(loadMoreIter+1);
    }
    

    if(!postList) {
        return <h1 style={{marginTop: 100}}>Sorry, posts weren't able to be retrieved</h1>;
    }
    
    //todo: implement unordered list of posts with pictures (if available) and text, add button at bottom to load more posts.
    
    return (
        <div id='postlist' style={{marginTop: 100}}>
            <div>{exists}</div>
            <ul>
                {
                    postList.map((post, i) => {
                        if(subreddit.search) {
                            return (
                                <li obj={post} key={i}>
                                    <h2><u>{post.data.title}</u></h2>
                                    <h3>Subreddit: {post.data.subreddit}</h3>
                                    <img src={post.data.preview ? post.data.preview.images[0].source.url.replace('amp;', '') : placeholderURL} alt='' />
                                    <h4>Author name: {post.data.author}</h4>
                                    <p>{post.data.selftext}</p>
                                    <a rel="noreferrer" href={post.data.url} target='_blank'><u>Click here to open reddit post</u></a>
                                </li>
                            );
                        } else {
                            return (
                                <li obj={post} key={i}>
                                    <h2><u>{post.data.title}</u></h2>
                                    <h3>Subreddit: {post.data.subreddit}</h3>
                                    <img src={post.data.preview ? post.data.preview.images[0].source.url.replace('amp;', '') : placeholderURL} alt='' />
                                    <h4>Author name: {post.data.author}</h4>
                                    <p>{post.data.selftext}</p>
                                    <a rel="noreferrer" href={post.data.url} target='_blank'><u>Click here to open reddit post</u></a>
                                </li>
                            );
                        }
                    })
                }
            </ul>
            
            <button onClick={loadMoreHandler} type='button' id='loadMore'>Load More...</button>
        </div>
    );

}

export default PostList;