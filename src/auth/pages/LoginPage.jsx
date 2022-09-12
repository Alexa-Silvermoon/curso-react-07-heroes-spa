import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context";

export const LoginPage = () => {

  const { login } = useContext( AuthContext );

  const navigate =useNavigate();

  const onLogin = () => {

    const lastPath = localStorage.getItem( 'lastPath' ) || '/'; // viene desde PrivateRoute.jsx, sino hay lastPath, entonces lleva a pagina Marvel

    login( 'Alexander Martinez Millan' );

    // navigate('/', {
    navigate( lastPath, {

      replace: true

    });
  }

  return (
    
    <div className="container mt-5"> {/* para que no quede tan pegado a los bordes de la pantalla */}
      <h1>Login</h1>
      <hr />

      <button className="btn btn-primary"
      onClick={ onLogin }
      >
        Entrar
      </button>

    </div>
  )
}

// navigate y useNavigate https://www.udemy.com/course/react-cero-experto/learn/lecture/19944240#questions
// login de usuario https://www.udemy.com/course/react-cero-experto/learn/lecture/19966550#questions
// logout del usuario https://www.udemy.com/course/react-cero-experto/learn/lecture/19966552#questions
// recordar la ultima pagina visitada https://www.udemy.com/course/react-cero-experto/learn/lecture/19968822#questions/16462976
