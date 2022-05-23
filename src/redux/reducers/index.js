import { combineReducers } from "redux";
import housePriceReducer from "./housePriceReducer";
import authReducer from "./authReducer";
import userEmailReducer from "./userEmailReducer";

const rootReducer = combineReducers({
    housePriceReducer: housePriceReducer,
    auth: authReducer,
    userEmail: userEmailReducer,
});

export default rootReducer;

