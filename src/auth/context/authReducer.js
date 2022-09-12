import { types } from "../types/types";

/* const initialState = {

    logged: false

} */

// export const authReducer = ( state = initialState, action ) => {
export const authReducer = ( state = {}, action ) => {

    switch ( action.type ) {

        case types.login:
            // return state;
            return {

                ...state, // state aqui en caso de que mi state cambien en otro lado entonces se trae desestructurado
                logged: true,
                user: action.payload
            };
            
        case types.logout:
            // return state;
            return {

                logged: false,
            };
    
        default:
            return state;
    }
}

// context y reducer https://www.udemy.com/course/react-cero-experto/learn/lecture/19965058#questions
// login de usuario https://www.udemy.com/course/react-cero-experto/learn/lecture/19966550#questions
// logout del usuario https://www.udemy.com/course/react-cero-experto/learn/lecture/19966552#questions
