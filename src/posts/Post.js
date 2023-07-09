import React from 'react';

const Post = ({post, lift}) => {

    return (
        <div>
            <h4>ID: {post.id}</h4>
            <h4>Title: {post.title}</h4>

            <button onClick={() => {
                lift(post)
            }}>Details</button>
        </div>
    );
};

export default Post;