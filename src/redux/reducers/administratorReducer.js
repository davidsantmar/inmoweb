import { login } from "../../firebase/actions";
import administratorActionTypes from "../actions/administratorActionTypes";

function administratorReducer(email, action) {
    switch (action.type){
        case(administratorActionTypes.ACCESS_GRANTED):
            if (email === 'davidsanmar@yahoo.es'){
                console.log('acceso autorizado');
                return ('acceso autorizado');
            }
        case (administratorActionTypes.ACCESS_NOT_AUTHORISED):
            console.log('acceso autorizado');
            return('not authorised');
        default:
            return email;
    }
}

export default administratorReducer;
