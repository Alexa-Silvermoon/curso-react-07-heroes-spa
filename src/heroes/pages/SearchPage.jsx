import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../components';
import { getHeroesByName } from '../helpers';

export const SearchPage = () => {

    const navigate = useNavigate(); // para obtener la navegacion

    const location = useLocation(); // localizacion de donde nos encontramos
    // console.log( { location } );

    // const query = queryString.parse( location.search ); // convertir query en string y separar los parametros
    // console.log( { query } );

    const { q = '' } = queryString.parse( location.search ); // convertir query en string y separar los parametros
    const heroes = getHeroesByName( q );

    const showSearch = ( q.length === 0 ); // esta vacio?
    const showError = ( q.length > 0 ) && heroes.length === 0; // caja de texto llena pero NO se encontraron heroes con getHeroesByName( q );

    const { searchText, onInputChange } = useForm({

        // searchText: ''
        searchText: q
    });

    const onSearchSubmit = ( event ) => {

        event.preventDefault(); // evita que se refresque la pagina al dar enter

        // if ( searchText.trim().length <= 1 ) return; // limpia espacios en blanco y no permite buscar solo una letra
        // console.log( { searchText } ); // texto que se busca

        navigate( `?q=${ searchText }` ); //poner este texto como parametro en barra de navegacion
    }

    return(

        <>
            <h1>Busqueda</h1>
            <hr />

            <div className="row"> {/* row crea dos columnas, una para col-5 y otra para col-7 */}

                <div className="col-5">
                    <h4>Buscar</h4>
                    <hr />

                    <form onSubmit={ onSearchSubmit } aria-label="form">
                        <input type="text"
                        placeholder="Busca aqui a tu heroe"
                        className="form-control"
                        name="searchText"
                        autoComplete="off"
                        value={ searchText }
                        onChange={ onInputChange }
                    />

                    <button className="btn btn-outline-primary mt-1">
                        Buscar
                    </button>
                    </form>
                </div>

                <div className="col-7">
                    <h4>Resultados</h4>
                    <hr />

                    {/* {
                        ( q === '' ) // ternario
                        ? <div className="alert alert-primary">Buscar al Heroe</div>
                        : ( heroes.length === 0 ) && <div className="alert alert-danger">No Hay Resultados para <b>{ q }</b></div>
                    } */}

                    {/* <div className="alert alert-primary" style={ { display: q !== '' ? 'none' : '' } } >
                        Search a Hero
                    </div> */}

                    <div aria-label="div-search-hero" className="alert alert-primary animate__animated animate__fadeIn" 
                        style={ { display: showSearch ? '' : 'none' } }
                         // aria-label="div-search-hero" se usara en SearchPage.test.jsx

                        >
                        Search a Hero
                    </div>

                    <div aria-label="div-no-resultados-para" className="alert alert-danger animate__animated animate__fadeIn" 
                        style={ { display: showError ? '' : 'none' } } 
                        // aria-label="div-search-hero" se usara en SearchPage.test.jsx

                        >
                        No Hay Resultados para <b>{ q }</b>
                    </div>

                    {
                        heroes.map( hero => ( 
                            
                            <HeroCard key={ hero.id } { ...hero }/>
                        ))
                    }

                    {/* <HeroCard/> */}
                </div>

            </div>

        </>

    )
}
// diseño de la pagina de busqueda https://www.udemy.com/course/react-cero-experto/learn/lecture/32113998#questions
// searchComponent https://www.udemy.com/course/react-cero-experto/learn/lecture/32113464?start=15#questions
// buscar heroes por nombre https://www.udemy.com/course/react-cero-experto/learn/lecture/29474020?start=15#questions
// mensajes condicionales en busqueda de heroe https://www.udemy.com/course/react-cero-experto/learn/lecture/29474182#questions
