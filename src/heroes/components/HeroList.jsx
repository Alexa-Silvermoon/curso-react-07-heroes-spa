import { HeroCard } from "./HeroCard";
import { getHeroesByPublisher } from "../helpers"
import { useMemo } from "react";


export const HeroList = ( { publisher } ) => {

    // const heroes = getHeroesByPublisher( publisher );
    const heroes = useMemo( () => getHeroesByPublisher( publisher), [ publisher ] ); // useMemo para memorizar valores, dependencia del id
    // console.log( heroes );

  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3"> {/* pantallas granmdes 1 columna, pantallas medianas 3 columnas, g-3 separacion entre elementos  */}
        {
            heroes.map( heroe => (

                /* <li key={ heroe.id}>
                    { heroe.superhero }
                </li> */

                <HeroCard
                    key={ heroe.id}
                    { ...heroe }/> /*  todo lo de arreglo heroes se envia a componente HeroCard */
            ))
        }
    </div>
  )
}
// lista de heroes https://www.udemy.com/course/react-cero-experto/learn/lecture/19945656#questions
// useMemo https://www.udemy.com/course/react-cero-experto/learn/lecture/19947816#questions
