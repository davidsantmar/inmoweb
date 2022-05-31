import administratorActionTypes from "../actions/administratorActionTypes";

function administratorReducer(email, action) {
    switch (action.type){
        case(administratorActionTypes.ACCESS_GRANTED):
            console.log('1');
            return ('access granted');
        case (administratorActionTypes.ACCESS_NOT_AUTHORISED):
            console.log('2');
            return('not authorised');
        default:
            return email;
    }
}

export default administratorReducer;
