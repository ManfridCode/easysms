import React from 'react';
import './PostItem.css';

const PostItem = ({post})=>{
    return (
        <li className="post-list-item">
            <h2 className="post-list-item-title">{post.title}</h2>
            <p className="post-list-item-body">{post.body}</p>
        </li>
    )
};

export default PostItem;