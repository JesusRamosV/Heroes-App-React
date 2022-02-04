import { types } from "../types/types";

// const state = {
//     name: 'Jesus',
//     logged: true,
// }



export const authReducer = (state = {}, action) => {


    switch (action.type) {
        case types.login:
            return {
                // name: action.payload.name === ...action.payload
                ...action.payload,
                logged: true
            }
        
            case types.logout:
                return {
                  logged: false  
                }
        
        default:
            return state;
    }
     
};
