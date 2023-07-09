import React, {useEffect, useState} from 'react';
import Post from "./Post";

const Posts = () => {
    let [posts, setPosts] = useState([]);
    let [post, setPost] = useState([]);

    let lift = (obj) => {
        setPost(obj)
    };

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json()
            .then(value => {
                    setPosts(value)
                }));
    }, [])

    return (
        <div>
            {JSON.stringify(post)}
            {posts.map(post => <Post key={post.id} post={post} lift={lift}/>)}
        </div>
    );
};

export default Posts;