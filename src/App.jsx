import React, { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Base from './components/Base';
import Toppings from './components/Toppings';
import Order from './components/Order';
import Layout from './Layout';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Model from './components/Model';

function App() {
  const [pizza, setPizza] = useState({ base: '', toppings: [] });

  const [showModel, setShowModel] = useState(false);

  const addBase = base => {
    setPizza({ ...pizza, base });
  };

  const addTopping = topping => {
    let newToppings;
    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter(item => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  };
  const location = useLocation();
  return (
    <>
      <Header />
      <Model showModel={showModel} setShowModel={setShowModel} />
      <AnimatePresence mode="wait" onExitComplete={() => setShowModel(false)}>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/base"
            element={<Base addBase={addBase} pizza={pizza} />}
          />
          <Route
            path="/toppings"
            element={<Toppings addTopping={addTopping} pizza={pizza} />}
          />
          <Route
            path="/order"
            element={<Order pizza={pizza} setShowModel={setShowModel} />}
          />
          <Route path="/" element={<Home />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
