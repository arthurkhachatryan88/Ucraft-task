import React from 'react';
import UserCard from './UserCard';
import { IUserProps } from "../../interface";
import Loading from "../Loading/Loading";

const UsersList:React.FC<IUserProps> = ({ usersData, loading }) => {
    if (loading) {
        return <Loading />
    }

    return (
        <div className="row">
            {usersData.map((pre) => (
                <div className="col s4">
                    <UserCard {...pre} key={pre.id} />
                </div>
            ))}
        </div>
    )
}

export default UsersList;