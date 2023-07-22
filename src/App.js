import './App.css';

import React from 'react';
import {UserContainer} from "./components/UserContainer/UserContainer";
import {PostContainer} from "./components/PostContainer/PostContainer";

const App = () => {
    return (
        <div>
            <UserContainer/>
            <hr/>
            <PostContainer/>
        </div>
    );
};

export default App;
