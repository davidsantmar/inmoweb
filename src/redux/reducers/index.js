import { combineReducers } from "redux";
import authReducer from "./authReducer";
import addImageReducer from './addImageReducer';

const rootReducer = combineReducers({
    addImage: addImageReducer,
    auth: authReducer,
});

export default rootReducer;
