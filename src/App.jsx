import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Admin from './pages/Admin';
import Puppies from './pages/Puppies';
import Kitties from './pages/Kitties';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Client from './pages/Client';
import Create from './pages/Create';
import ClientSubmit from './pages/ClientSubmit';
import { ShoppingCartProvider } from './context/ShoppingCartContext';
import ClientLogin from './pages/ClientLogin';
import ClientRegister from './pages/ClientRegister';
import AdminLogin from './pages/AdminLogin';

function App() {
  return (
    <ShoppingCartProvider>
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/puppies' element={<Puppies />} />
          <Route path='/kitties' element={<Kitties />} />
          <Route path='/products' element={<Products />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/client' element={<Client />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/admin/login' element={<AdminLogin />} />
          <Route path='/login' element={<ClientLogin />} />
          <Route path='/register' element={<ClientRegister />} />
          <Route path='/admin/create' element={<Create />} />
          <Route path='/client/success' element={<ClientSubmit status='success' />} />
          <Route path='/client/fail' element={<ClientSubmit status='fail' />} />
        </Routes>
      </Router>
    </ShoppingCartProvider>
  );
}

export default App;
