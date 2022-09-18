import { combineReducers } from "redux";
import authReducer from "./authReducer";
import addUserReducer from "./addUserReducer";
import addImageReducer from './addImageReducer';

const rootReducer = combineReducers({
    addImage: addImageReducer,
    auth: authReducer,
    addUser: addUserReducer,
});

export default rootReducer;
