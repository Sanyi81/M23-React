import React from 'react';
import {useForm} from "react-hook-form";

const PostForm = ({setPosts}) => {
    const {register, reset, handleSubmit} = useForm();

    const save = (post) => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(post),
            method: 'POST'
        })
            .then(value => value.json())
            .then(value => {
                setPosts(prev => [...prev, value])
                reset()
            })
    };

    return (
        <form onSubmit={handleSubmit(save)}>
            <label>userId:<input type="text" placeholder={'userId'} {...register('userId')}/></label>
            <label>title:<input type="text" placeholder={'title'} {...register('title')}/></label>
            <label>body:<input type="text" placeholder={'body'} {...register('body')}/></label>
            <button>Save</button>
        </form>
    );
};

export {PostForm};