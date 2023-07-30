import React, {useContext} from 'react';
import {useNavigate} from "react-router-dom";

import {Context} from "../../../pages";

const Comment = ({comment}) => {
    const {id, postId, name} = comment;

    const navigate = useNavigate();

    const {setCommentId} = useContext(Context);

    const handleClick = () => {
        navigate(`posts/${postId}`);
        setCommentId(id)
    }

    return (
        <div>
            <div>id: {id}</div>
            <div>postId: {postId}</div>
            <div>name: {name}</div>
            <button onClick={handleClick}>get post</button>
        </div>
    );
};

export {Comment};
