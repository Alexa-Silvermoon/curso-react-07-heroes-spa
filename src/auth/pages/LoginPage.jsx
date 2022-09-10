import { useNavigate } from "react-router-dom"

export const LoginPage = () => {

  const navigate =useNavigate();

  const onLogin = () => {

    navigate('/', {

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
