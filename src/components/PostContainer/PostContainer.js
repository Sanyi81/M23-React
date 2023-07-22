import React, {useState} from 'react';
import {PostForm} from "./PostForm/PostForm";
import {Posts} from "./Posts/Posts";

const PostContainer = () => {
    const [posts, setPosts] = useState([]);

    return (
        <div>
            <hr/>
            <PostForm setPosts={setPosts}/>
            <hr/>
            <Posts posts={posts} setPosts={setPosts}/>
        </div>
    );
};

export {PostContainer};