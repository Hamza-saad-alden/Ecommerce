import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { ShoppingCartProvider } from './context/ShoppingContext';
import Cart from './pages/cart/Cart';
import { Shop } from './pages/Shop/Shop';
import { About } from './pages/about/About';
import { Sproduct } from './pages/sproduct/Sproduct';

function App() {
  return (

    <ShoppingCartProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/about' element={<About />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/product/:id' element={<Sproduct />} />
      </Routes>
    </ShoppingCartProvider>

  );
}

export default App;
