import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth"

export const PrivateRoute = ( { children } ) => {

    // children es <HeroesRoutes/>

    const { logged } = useContext( AuthContext );
    // usuario autenticado o no? servira para el ternario

    const { pathname, search } = useLocation();
    const lastPath = pathname + search;

    localStorage.setItem('lastPath', lastPath );
    // console.log( 're-render' );

  return ( logged )?
            children
            : <Navigate to="/login" />
}

// rutas privadas https://www.udemy.com/course/react-cero-experto/learn/lecture/19967002#questions
// rutas publicas https://www.udemy.com/course/react-cero-experto/learn/lecture/19968708#questions
// recordar la ultima pagina visitada https://www.udemy.com/course/react-cero-experto/learn/lecture/19968822#questions/16462976
