import React, {useEffect, useRef} from 'react';

const PostPage = () => {

    const userIdRef = useRef('');
    const idRef = useRef('');
    const titleRef = useRef('');
    const bodyRef = useRef('');

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(
        userIdRef.current.value,
        idRef.current.value,
        titleRef.current.value,
        bodyRef.current.value,
        );

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method:'POST',
            body: JSON.stringify({
                userId: userIdRef.current.value,
                id: idRef.current.value,
                title: titleRef.current.value,
                body: bodyRef.current.value
                })
            })
            .then((response) => response.json())
            .then((data) => console.log(data))
    };

    useEffect(() => {
        console.log('posting');
        });

    return (
        <div>
            <form method="post" onSubmit={handleSubmit}>
                    New post:
                <br/>
                <label>
                    userId:
                    <br/>
                    <input type="number" autoComplete="userId" ref={userIdRef}/>
                </label>
                <br/>
                <label>
                    id:
                    <br/>
                    <input type="number" autoComplete="id" ref={idRef}/>
                </label>
                <br/>
                <label>
                    title:
                    <br/>
                    <input type="text" autoComplete="title" ref={titleRef}/>
                </label>
                <br/>
                <label>
                    body:
                    <br/>
                    <input type="text" autoComplete="body" ref={bodyRef}/>
                </label>
                <br/>
                <button>Save</button>
            </form>
        </div>
    );
};

export default PostPage;