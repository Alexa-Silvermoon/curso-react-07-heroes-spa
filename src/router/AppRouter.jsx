/* import { Routes, Route, Navigate, Link } from "react-router-dom";
import { Navbar } from "../ui"; //se trae asi gracias al doble archivo de barril en carpeta ui
import { LoginPage } from "../auth/pages/LoginPage";
import { DcPage } from "../heroes/pages/DcPage";
import { MarvelPage } from "../heroes/pages/MarvelPage"; */

import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../auth";
import { HeroesRoutes } from "../heroes";
// import { Navbar } from "../ui"; //se trae asi gracias al doble archivo de barril en carpeta ui


export const AppRouter = () => {
  return (

    <>
      {/* <Navbar/> */}
        <Routes>
            {/* <Route path="marvel" element={<MarvelPage />} /> */}
            {/* <Route path="dc" element={<DcPage />} /> */}
            <Route path="login" element={<LoginPage />} /> {/* el Navbar no aparecera cuando estemos en la pagina del login */}
            <Route path="/*" element={<HeroesRoutes />} />

            {/* <Route path="/" element={<Navigate to="/marvel" />} /> */}
        </Routes>
    </>
  )
}

// creando un primer router: https://www.udemy.com/course/react-cero-experto/learn/lecture/19943416#questions
// clase de la ruta activa y archivos de barril: https://www.udemy.com/course/react-cero-experto/learn/lecture/29456594#questions
