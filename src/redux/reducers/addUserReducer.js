import addUserActionTypes from '../actions/addUserActionTypes';

function addUserReducer(users = [], action){
    switch(action.type){
        case addUserActionTypes.LOAD_USERS:
            return [...action.users];
        case addUserActionTypes.ADD_USER:
            return [...users, { description: action.user, id: Math.random() }];
        case addUserActionTypes.DELETE_USER:
            return users.filter((user) => user.id !== action.user.id);
        default:
            return users;
    }

}

export default addUserReducer;