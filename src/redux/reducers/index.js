import { combineReducers } from "redux";
import housePriceReducer from "./housePriceReducer";

const rootReducer = combineReducers({
    housePriceReducer: housePriceReducer
});

export default rootReducer;

