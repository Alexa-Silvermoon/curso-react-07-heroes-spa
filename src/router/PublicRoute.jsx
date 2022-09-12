import { useContext } from "react"
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth"

export const PublicRoute = ( { children } ) => {

    // children es <LoginPage/>

    const { logged } = useContext( AuthContext );
    // usuario autenticado o no? servira para el ternario

  return ( !logged )?
            children
            : <Navigate to="/marvel" />
}

// rutas privadas https://www.udemy.com/course/react-cero-experto/learn/lecture/19967002#questions
// rutas publicas https://www.udemy.com/course/react-cero-experto/learn/lecture/19968708#questions
// recordar la ultima pagina visitada https://www.udemy.com/course/react-cero-experto/learn/lecture/19968822#questions/16462976
