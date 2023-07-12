import React from 'react';

const UserComponent = ({user, setUserId, setUserActive, userActive}) => {
    const {id, name, username, email} = user;

    const click = () => {
        setUserId(id)
        setUserActive(prev => {
            if (prev === null) {
                return id
            }
            return null
        })
    }
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            <button disabled={userActive !== id && userActive !== null} onClick={click}>GetPosts</button>
        </div>
    );
};

export default UserComponent;