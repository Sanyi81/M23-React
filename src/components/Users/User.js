import React from 'react';

const User = (props) => {
    const {id, name, username, email} = props;
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
        </div>
    );
};

export default User;