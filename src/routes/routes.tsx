import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from '../pages/home/Home';
import {Prescritores} from '../pages/prescritores/Prescritores';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path={'/'} element={<Home/>}/>
      <Route path={'/em-desenvolvimento'} element={<Prescritores/>}/>
    </Routes>
  );
}

// typeof typeofAppRoutes = typeof AppRoutes;
