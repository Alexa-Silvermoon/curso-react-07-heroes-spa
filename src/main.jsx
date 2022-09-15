import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import { HeroesApp } from './HeroesApp'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(


  <React.StrictMode>

    {/* <BrowserRouter> */}
    <HashRouter>

      <HeroesApp/>

    </HashRouter>
    {/* </BrowserRouter> */}

  </React.StrictMode>
  
  /* <React.StrictMode>
    <HeroesApp />
  </React.StrictMode> */
)
