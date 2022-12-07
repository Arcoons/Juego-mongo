import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Inicio from './pages/Inicio';
import Preguntas from './pages/Preguntas';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Inicio />} />
    <Route path='/preguntas' element={<Preguntas />} />
  </Routes>
</BrowserRouter> 

);
