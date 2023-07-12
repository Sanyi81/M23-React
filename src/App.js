import './App.css';

import React, {createContext, useState} from 'react';
import UserContainer from "./components/UserContainer/UserContainer";
import Posts from "./components/Posts/Posts";

// const App = () => {
//     const [userId, setUserId] = useState(null);
//     const [userActive, setUserActive] = useState(null);
//     return (
//         <div>
//             <UserContainer setUserId={setUserId} setUserActive={setUserActive} userActive={userActive}/>
//             <hr/>
//             {userId && userActive && <Posts userId={userId}/>}
//         </div>
//     );
// };
//
// export default App;

import Child1 from "./components/Child1/Child1";
import Child2 from "./components/Child2/Child2";

export const Context = createContext(null);
const App = () => {
    const [data, setData] = useState([1,2,3])
    return (
        <Context.Provider value={{data, setData}}>
            <div>
                <Child1/>
                <hr/>
                <Child2/>
            </div>
        </Context.Provider>
    );
};

export default App;
