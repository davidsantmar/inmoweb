import userEmailActionTypes from "../actions/userEmailActionTypes";

function userEmailReducer(userEmail = [], action) {
  switch (action.type) {
    case userEmailActionTypes.SHOW_EMAIL:
      return action.userEmail;

    default:
      return userEmail;
  }
}

export default userEmailReducer;