import showUsersActionTypes from './showUsersActionTypes';

export function showUsers(users){
    return { type: showUsersActionTypes.SHOW_USERS, users }
}
