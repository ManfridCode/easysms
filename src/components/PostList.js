import React,{useContext} from 'react';
import {DataContext} from './DataLayer';
import PostItem from './PostItem';
import Preloader from './Preloader';
import './PostList.css';

const PostList = ()=>{
    const {userPosts} = useContext(DataContext);

    if(userPosts === null) return <Preloader/>
    return (
        <ul className="posts-list">
            {userPosts.map(el=><PostItem key={el.id} post={el}/>)}
        </ul>
    )
};

export default PostList;