import React from 'react';
import { IUserType } from "../../interface";

const UserCard: React.FC<IUserType> = (u) => {
    const { id, name, email, username, phone, address } = u

    return (
        <div className="card">
            <div className="card-image"></div>
            <div className="card-content">
                <p><b>ID:</b> {id} </p>
                <p><b>Name:</b> {name}</p>
                <p><b>Username:</b> {username}</p>
                <p><b>E-mail:</b> {email}</p>
                <p><b>Phone:</b> {phone}</p>
                <p><b>City:</b> {address.city}</p>
                <p><b>Address:</b> {address.street}</p>
                <p><b>Zip:</b> {address.zipcode}</p>
            </div>
        </div>
    )
}

export default UserCard