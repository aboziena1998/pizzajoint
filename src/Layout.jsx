import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import { AnimatePresence } from 'framer-motion';

const Layout = () => {
  return (
    <AnimatePresence>
      <Header />
      <Outlet />
    </AnimatePresence>
  );
};

export default Layout;
