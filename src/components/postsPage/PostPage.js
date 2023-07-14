import React from 'react';

const PostPage = () => {

    return (
        <div>
            <form method="post">
                <label>
                    Post:
                    <input name="submitted-name" autoComplete="name"/>
                </label>
                <button>Save</button>
            </form>
        </div>
    );
};

export default PostPage;