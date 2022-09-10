import { Routes, Route, Navigate, Link } from "react-router-dom";
import { Navbar } from "../../ui"
import { DcPage, HeroPage, MarvelPage, SearchPage } from "../pages";

export const HeroesRoutes = () => {
  return (
    <>
        <Navbar/>

        <div className="container"> {/* para que no quede tan pegado a los bordes de la pantalla */}
          <Routes>
              <Route path="marvel" element={<MarvelPage />} />
              <Route path="dc" element={<DcPage />} />

              <Route path="search" element={<SearchPage />} />
              <Route path="hero/:id" element={<HeroPage />} /> {/* comodin */}

              <Route path="/" element={<Navigate to="/marvel" />} />
          </Routes>
        </div>

    </>
  )
}

// creando un segundo Router: https://www.udemy.com/course/react-cero-experto/learn/lecture/19943932#questions
// leer argumentos por URL https://www.udemy.com/course/react-cero-experto/learn/lecture/19946888#questions
