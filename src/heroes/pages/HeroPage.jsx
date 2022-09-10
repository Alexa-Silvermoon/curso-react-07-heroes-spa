import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
// import { useParams } from 'react-router';
import { getHeroById } from "../helpers";

export const HeroPage = () => {

  const { id } = useParams(); // toma el parametro id de la barra de navegacion del navegador
  // console.log( id );

  // const hero = getHeroById( id );
  const hero = useMemo( () => getHeroById( id), [ id ] ); // useMemo para memorizar valores, dependencia del id
  // console.log( hero );

  const navigate = useNavigate();

  const onNavigateBack = () => {

    navigate( -1 ); //se devuelve una pagina hacia atras en el navegador

    /* navigate('/marvel', {

      replace: true // evita que el usuario se devuelve a la pagina anterior, presionandoo el boton atras del navegador

    }); */

  }

  if ( !hero ){

    return <Navigate to="/marvel"/> // si el heroe no existe, ir a este pagina
  }

  return (

    <div className="row mt-5">
      <div className="col-4">
        <img
        src={ `/assets/heroes/${ id }.jpg` }
        alt={ hero.superhero }
        className="img-thumbnail animate__animated animate__fadeInLeft"/> {/* aparecen lentamente la carta del heroe por la izquierda */}
      </div>

      <div className="col-8">
        <h3>{ hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"> <b>Alter Ego:</b> { hero.alter_ego }</li>
          <li className="list-group-item"> <b>Publisher:</b> { hero.publisher }</li>
          <li className="list-group-item"> <b>Primera Aparición:</b> { hero.first_appearance }</li>
        </ul>

        <h5 className="mt-3">Characters</h5>
        <p>{ hero.characters }</p>

        <button className="btn btn-outline-primary"
        onClick={ onNavigateBack }>
          Volver
        </button>
      </div>
    </div>

  )
}

// leer argumentos por URL https://www.udemy.com/course/react-cero-experto/learn/lecture/19946888#questions
// estilo del componente HeroPage https://www.udemy.com/course/react-cero-experto/learn/lecture/19947746?start=15#questions
// useMemo https://www.udemy.com/course/react-cero-experto/learn/lecture/19947816#questions
// animaciones css con Animate.css https://www.udemy.com/course/react-cero-experto/learn/lecture/19948754#questions
// https://animate.style/
