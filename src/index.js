import { BrowserRouter, Routes, Route} from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Main from './pages/Main'
import Catalog from './pages/Catalog'
import reportWebVitals from './reportWebVitals'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Main/>}/>
        <Route exact path='/catalog' element={<Catalog/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
  
)

reportWebVitals()
