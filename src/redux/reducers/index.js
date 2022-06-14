import { combineReducers } from "redux";
import housePriceReducer from "./housePriceReducer";
import authReducer from "./authReducer";
import addUserReducer from "./addUserReducer";

const rootReducer = combineReducers({
    housePriceReducer: housePriceReducer,
    auth: authReducer,
    addUser: addUserReducer,
});

export default rootReducer;
