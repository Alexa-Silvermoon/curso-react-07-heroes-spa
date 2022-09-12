import { useReducer } from "react";
import { types } from "../types/types";
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer";

/* const initialState = {

    logged: false

} */

const init = () => { // init hace que la info de sesion de usuario se mantenga en localStorage

    const user = JSON.parse( localStorage.getItem('user') ); // traer lo que hay en localStorage y convertirlo a JSON

    return{

        logged: !!user, // si user existe, esto va a estar en true
        user: user // y si existe entonces que se muestre el user
    }
}

export const AuthProvider = ( { children } ) => {

    // const [ authState, dispatch ] = useReducer( authReducer, initialState, init );
    const [ authState, dispatch ] = useReducer( authReducer, {}, init );

    const login = ( name = '' ) => {

        const user = { id: 'ABC', name };

        const action = { type: types.login, payload: user }

        localStorage.setItem('user', JSON.stringify( user ) ); // en localStorage solo se pueden grabar strings

        dispatch( action );

    }
    
    //TODO: hacer que funcione el logout en el "salir", y que no aparezca el nombre en el navbar
    const logout = () => {

        localStorage.removeItem('user');

        const action = { type: types.logout };

        dispatch( action );
        
    }

    return (
        
        <AuthContext.Provider value={{

            ...authState,
            login: login,
            logout: logout

        }}>
            { children }
        </AuthContext.Provider>
    );
}

// context y reducer https://www.udemy.com/course/react-cero-experto/learn/lecture/19965058#questions
// login de usuario https://www.udemy.com/course/react-cero-experto/learn/lecture/19966550#questions
// mantener el usuario activo en el localStorage https://www.udemy.com/course/react-cero-experto/learn/lecture/32128560?start=15#questions
// logout del usuario https://www.udemy.com/course/react-cero-experto/learn/lecture/19966552#questions
