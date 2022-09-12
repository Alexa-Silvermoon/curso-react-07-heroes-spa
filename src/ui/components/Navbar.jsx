import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context';

export const Navbar = () => {

    const { user, logout } = useContext( AuthContext );
    // console.log( user );

    const navigate = useNavigate();

    const onLogout = () => {

        // console.log( 'onLogout' );
        
        navigate('/login', {
            
            replace: true // evita que el usuario se devuelve a la pagina anterior, presionandoo el boton atras del navegador
            
        });
        
        logout();

        // Tener cuidado al habilitar lo siguiente ya que interferira con lastPath en PrivateRoute.jsx y LoginPage.jsx
        // localStorage.clear(); //limpia el local storage, es decir elimina el correo ahi almacenado
        // location.reload(); // recarga la pagina
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={ ( { isActive } ) => `nav-item nav-link ${ isActive? 'active' : '' }`} /* si el usuario dio click en marvel, entonces se activa y DC se desactiva */
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={ ( { isActive } ) => `nav-item nav-link ${ isActive? 'active' : '' }`}
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        className={ ( { isActive } ) => `nav-item nav-link ${ isActive? 'active' : '' }`}
                        to="/search"
                    >
                        Buscar
                    </NavLink>

                    {/* <NavLink 
                        className={ ( { isActive } ) => `nav-item nav-link ${ isActive? 'active' : '' }`}
                        to="/hero"
                    >
                        Hero
                    </NavLink> */}
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end"> {/* hace que el spam y el boton se vayan a la derecha de la pantalla */}
                <ul className="navbar-nav ml-auto">
                    {/* <NavLink 
                        className="nav-item nav-link" 
                        to="/login"
                    >
                        Logout
                    </NavLink> */}

                    <span className='nav-item nav-link text-primary'>
                        { user?.name }
                    </span>

                    <button className='nav item nav-link btn'
                            onClick={ onLogout }
                    >
                        Salir
                    </button>
                </ul>
            </div>
        </nav>
    )
}

// ruta activa isActive en el Navbar https://www.udemy.com/course/react-cero-experto/learn/lecture/29456594#questions
// navigate y useNavigate https://www.udemy.com/course/react-cero-experto/learn/lecture/19944240#questions
// login de usuario https://www.udemy.com/course/react-cero-experto/learn/lecture/19966550#questions
// logout del usuario https://www.udemy.com/course/react-cero-experto/learn/lecture/19966552#questions
// recordar la ultima pagina visitada https://www.udemy.com/course/react-cero-experto/learn/lecture/19968822#questions/16462976
