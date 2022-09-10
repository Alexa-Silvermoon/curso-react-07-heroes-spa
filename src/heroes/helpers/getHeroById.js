import { heroes } from '../data/heroes'

export const getHeroById = ( id ) => {

    return heroes.find( hero => hero.id === id ); // busca en el arreglo de heroes, solo un heroe que cumpla la condicion del id
}

// leer argumentos por URL https://www.udemy.com/course/react-cero-experto/learn/lecture/19946888#questions
