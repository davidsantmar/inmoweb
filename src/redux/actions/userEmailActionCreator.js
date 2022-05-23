import userEmailActionTypes from "./userEmailActionTypes";

export function showUserEmail(userEmail) {
  return {
    type: userEmailActionTypes.SHOW_EMAIL,
    userEmail
  };
}
