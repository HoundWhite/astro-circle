import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Page/HomePage';
import LoginPage from './Page/LoginPage';
import RegPage from './Page/RegPage';
import ProductsPage from './Page/ProductsPage';
import ProductDetailPage from './Page/ProductDetailPage';
import AccountPage from './Page/AccountPage';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/login" element={<LoginPage />} />
      <Route exact path="/register" element={<RegPage />} />
      <Route exact path="/products" element={<ProductsPage />} />
      <Route exact path="/product/:id" element={<ProductDetailPage />} />
      <Route exact path="/account" element={<AccountPage />} />
    </Routes>
  );
}

export default App; 