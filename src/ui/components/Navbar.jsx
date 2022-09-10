import { Link, NavLink, useNavigate } from 'react-router-dom';


export const Navbar = () => {

    const navigate = useNavigate();

    const onLogout = () => {

        // console.log( 'onLogout' );

        navigate('/login', {

            replace: true // evita que el usuario se devuelve a la pagina anterior, presionandoo el boton atras del navegador

        });
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
                        Alexander
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
