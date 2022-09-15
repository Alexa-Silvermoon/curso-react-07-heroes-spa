/* import { Routes, Route, Navigate, Link } from "react-router-dom";
import { Navbar } from "../ui"; //se trae asi gracias al doble archivo de barril en carpeta ui
import { LoginPage } from "../auth/pages/LoginPage";
import { DcPage } from "../heroes/pages/DcPage";
import { MarvelPage } from "../heroes/pages/MarvelPage"; */

// import { Routes, Route } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../auth";
import { HeroesRoutes } from "../heroes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
// import { Navbar } from "../ui"; //se trae asi gracias al doble archivo de barril en carpeta ui


export const AppRouter = () => {
  return (

    <>
      {/* <Navbar/> */}
        <Routes>
            {/* <Route path="marvel" element={<MarvelPage />} /> */}
            {/* <Route path="dc" element={<DcPage />} /> */}
            {/* <Route path="login" element={<LoginPage />} /> el Navbar no aparecera cuando estemos en la pagina del login */}

            <Route path="/login" element={ /* de esta forma se buscar proteger el login dentro dentro de PublicRoutes y queda como publica pero protegida */

              <PublicRoute>
                <LoginPage/>
              </PublicRoute>

            }/>

            <Route path="/*" element={ /* de esta forma se buscar proteger HeroesRoutes dentro dentro de PrivateRoutes y queda como privada */

              <PrivateRoute>
                <HeroesRoutes/>
              </PrivateRoute>

            }/>
            
            {/* <Route path="/*" element={<HeroesRoutes />} /> */}

            {/* <Route path="/" element={<Navigate to="/marvel" />} /> */}
        </Routes>
    </>
  )
}

// creando un primer router: https://www.udemy.com/course/react-cero-experto/learn/lecture/19943416#questions
// clase de la ruta activa y archivos de barril: https://www.udemy.com/course/react-cero-experto/learn/lecture/29456594#questions
// rutas privadas https://www.udemy.com/course/react-cero-experto/learn/lecture/19967002#questions
// rutas publicas https://www.udemy.com/course/react-cero-experto/learn/lecture/19968708#questions
// recordar la ultima pagina visitada https://www.udemy.com/course/react-cero-experto/learn/lecture/19968822#questions/16462976
