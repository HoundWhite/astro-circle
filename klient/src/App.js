import { Route, Routes } from 'react-router-dom';
import HomePage from './Page/HomePage';
import RegPage from './Page/RegPage';
import LoginPage from './Page/LoginPage';
import ServicePage from './Page/ServicePage';
import ProductsPage from './Page/ProductsPage';
import AccountPage from './Page/AccountPage';
import ProductDetailPage from './Page/ProductDetailPage';
import { CartProvider } from './context/CartContext';
import AstrologyPage from './Page/AstrologyPage';
import NumerologyPage from './Page/NumerologyPage';

function App() {
  return (
    <CartProvider>
      <div>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/registre' element={<RegPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/account' element={<AccountPage />} />
          <Route path='/astrology' element={<AstrologyPage />} />
          <Route path='/numerology' element={<NumerologyPage />} />
          <Route path='/service' element={<ServicePage />} />
          <Route path='/products' element={<ProductsPage />} />
          <Route path='/product/:id' element={<ProductDetailPage />} />
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;
