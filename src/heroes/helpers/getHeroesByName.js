import { heroes } from "../data/heroes";

export const getHeroesByName = ( name = [] ) => {

    name = name.toLocaleLowerCase().trim(); // poner nombre en minusculas y eliminar espacios adelante y atras
    if ( name.length === 0 ) return []; // si longitud es 0, devolver arreglo vacio

    return heroes.filter( hero => hero.superhero.toLocaleLowerCase().includes( name ) );
}
// buscar heroes por nombre https://www.udemy.com/course/react-cero-experto/learn/lecture/29474020?start=15#questions
