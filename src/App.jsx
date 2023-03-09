import { Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout.jsx/Layout';
import HomePage from './pages/HomePage/HomePage';
import WishlistPage from './pages/WishlistPage/WishlistPage';


function App() {
  return (

    <div className="App">

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/WishlistPage" element={<WishlistPage />} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
