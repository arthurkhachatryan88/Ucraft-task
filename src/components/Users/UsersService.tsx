import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import UsersList from "./UsersList";
import Pagination from "../Pagination/Pagination";
import {IUsersInterface} from "../../interface";
import {fetchUsers} from '../../redux/action/action'

const UsersService = () => {
    // const [usersData, setUsersData] = useState<IUserType[]>([])
    const [loading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [perPage] = useState(2)




    const users = useSelector((state: IUsersInterface) => state.users)
    const dispatch = useDispatch()

    console.log('users', users)

    useEffect(() => {
        // loadData()
        fetchUsers(dispatch)
    }, [])

    // const loadData = () => {
    //     setLoading(true)
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(response => response.json())
    //         .then(receivedData => {
    //             setUsersData(receivedData)
    //             setLoading(false)
    //         })
    // }

    const indexOfLastUser = currentPage * perPage
    const indexOfFirstUser = indexOfLastUser - perPage
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser)

    const paginate = (pageNumber: any) => setCurrentPage(pageNumber)

    return (
        <>
            <UsersList
                usersData={currentUsers}
                loading={loading}
            />
            <div className="mt4 text-center">
                <Pagination
                    perPage={perPage}
                    totalUsers={users.length}
                    paginate={paginate}
                />
            </div>
        </>
    )
}

export default UsersService;