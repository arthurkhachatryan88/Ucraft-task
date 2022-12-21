import React from 'react';
import UsersService from "../Users/UsersService";

const Users = () => {
    return (
        <div className="users mt5">
            <div className="container">
                <h3 className="mb1">Users</h3>
                <UsersService />
            </div>
        </div>
    );
};

export default Users;