import React from 'react';

import './App.css';
import PostPage from "./components/postsPage/PostPage";
import UserPage from "./components/userPage/UserPage";

const App = () => {
    return (
        <div>
            <UserPage/>
            <hr/>
            <PostPage/>
        </div>
    );
};

export default App;
