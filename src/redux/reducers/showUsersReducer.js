import showUsersActionTypes from '../actions/showUsersActionTypes';

function showUsersReducer(users = [], action){
    switch(action.type){
        case showUsersActionTypes.SHOW_USERS:
            return [...action.users];
        default:
            return users;
    }
}

export default showUsersReducer;