import {FETCH_USERS} from './types';
const API = 'https://jsonplaceholder.typicode.com/users';

export const fetchUsers = (dispatch) => {
    fetch(API)
    .then(resp => {
        return resp.json();
    })
    .then(data => {
        dispatch({
            type: FETCH_USERS,
            payload: data
        });
    })
}