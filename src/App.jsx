import { Routes, Route } from 'react-router-dom';
import headerImg from './components/Header/Header_img/logo-black.png'
import Header from './components/Header/Header';
import Layout from './components/Layout.jsx/Layout';
import HomePage from './pages/HomePage/HomePage';
import WishlistPage from './pages/WishlistPage/WishlistPage';
import CartPage from './pages/CartPage/CartPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header headerImg={headerImg} />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/WishlistPage" element={<WishlistPage />} />
          <Route path="/CartPage" element={<CartPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
