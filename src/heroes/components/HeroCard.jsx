import { Link } from "react-router-dom";

const CharactesByHero = ( { alter_ego, characters } ) => {

    /* if ( alter_ego === characters ) return(<></>);
    // si nombre de alter_ego es igual al nombre que hay en characters entonces devuelve un fragmento vacio

    return <p>{ characters }</p>; // pero si es diferente devuelve el nombre del los caracteres */

    return ( alter_ego === characters ) ? <></> : <p>{ characters }</p>; // condicional ternario

}

export const HeroCard = ({

    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,

}) => {

    const heroImageUrl = `../assets/heroes/${ id }.jpg`;

    // const charactesByHero = <p>{ characters }</p>;

  return (
    <div className="col animate__animated animate__fadeIn"> {/* aparecen lentamente las cartas de los heroes */}
        <div className="card">
            <div className="row no-gutters">

                <div className="col-4">
                    <img src={ heroImageUrl } className="card-img" alt={ superhero }/>
                </div>

                <div className="col-8">
                    <div className="card-body">
                        <h5 className="card-title">{ superhero }</h5> {/* nombre de superheroe */}

                        <p className="card-text">{ alter_ego }</p> {/* nombre alter ego */}

                        {
                            // ( alter_ego !== characters ) && <p>{ characters }</p> // condicional
                            // ( alter_ego !== characters ) && charactesByHero // condicional
                            <CharactesByHero characters={ characters } alter_ego={ alter_ego }/>
                        }
                        
                        <div className="card-text">
                            <small className="text-muted">{ first_appearance }</small> {/* primer aparicion del heroe */}
                        </div>

                        <Link to={ `/hero/${ id }`}>
                            Mas..
                        </Link>

                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

// tarjeta con informacion del heroe: https://www.udemy.com/course/react-cero-experto/learn/lecture/19946236#questions/11501426
// tarjeta de heroe - parte 2 https://www.udemy.com/course/react-cero-experto/learn/lecture/32112628?start=15#questions
// animaciones css con Animate.css https://www.udemy.com/course/react-cero-experto/learn/lecture/19948754#questions
// https://animate.style/