import React, {useEffect, useState} from 'react';
import UserComponent from "./UserComponent/UserComponent";

const UserContainer = ({setUserId, setUserActive, userActive}) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => setUsers(value))
    }, [])

    return (
        <div>
            {users.map(user => <UserComponent
                key={user.id} user={user}
                setUserId={setUserId}
                setUserActive={setUserActive}
                userActive={userActive}
            />)}
        </div>
    );
};

export default UserContainer;