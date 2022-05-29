import { combineReducers } from "redux";
import housePriceReducer from "./housePriceReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
    housePriceReducer: housePriceReducer,
    auth: authReducer,
});

export default rootReducer;
