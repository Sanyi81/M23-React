import React from 'react';
import {useOutletContext} from "react-router-dom";

const PostDetails = ({post}) => {
    const {id, title} = post;
    const {commentId} = useOutletContext();

    return (
        <div>
            <h2>CommentId: {commentId}</h2>
            <div>id: {id}</div>
            <div>title: {title}</div>
        </div>
    );
};

export {PostDetails};