import addUserActionTypes from './addUserActionTypes';

export function addUser(user){
    return { type: addUserActionTypes.ADD_USER, user }
}

export function deleteUser(user){
    return { type: addUserActionTypes.DELETE_USER, user }
}