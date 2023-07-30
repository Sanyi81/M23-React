import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {postService} from "../../../services/postService/postService";
import {PostDetails} from "../PostDetails/PostDetails";

const Post = () => {
    const [post, setPost] = useState(null);
    const {postId} = useParams();

    useEffect(() => {
        postService.getById(postId).then(({data}) => setPost(data))
    }, [postId])

    return (
        <div>
            {post && <PostDetails post={post}/>}
        </div>
    );
};

export {Post};