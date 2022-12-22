import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './scss/app.scss';

import Cart from './pages/Cart';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import { PizzaDetail } from './pages/PizzaDetail';
import Layout from './components/layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<HomePage />} />
        <Route path="cart" element={<Cart />} />
        <Route path="pizza/:id" element={<PizzaDetail />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
