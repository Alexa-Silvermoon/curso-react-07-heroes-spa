import { heroes } from '../data/heroes';

export const getHeroesByPublisher = ( publisher ) => {

    const validPublishers = ['DC Comics', 'Marvel Comics'];

    if ( !validPublishers.includes( publisher ) ){

        throw new Error( `${ publisher } no es un publisher valido` );
    }

    return heroes.filter( heroe => heroe.publisher === publisher );

}
// lista de heroes https://www.udemy.com/course/react-cero-experto/learn/lecture/19945656#questions
