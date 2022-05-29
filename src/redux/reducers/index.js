import { combineReducers } from "redux";
import housePriceReducer from "./housePriceReducer";
import authReducer from "./authReducer";
import accessPAReducer from "./accessPAReducer";

const rootReducer = combineReducers({
    housePriceReducer: housePriceReducer,
    auth: authReducer,
    accessPA: accessPAReducer,
});

export default rootReducer;

