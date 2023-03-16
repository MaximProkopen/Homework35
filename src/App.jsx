import { useReducer, createContext } from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout.jsx/Layout';
import HomePage from './pages/HomePage/HomePage';
import WishlistPage from './pages/WishlistPage/WishlistPage';
import CartPage from './pages/CartPage/CartPage';
import './App.css';

export const WishlistContext = createContext(null);

function App() {
  const initialState = {
    productWishlist: []
  }

  const wishlistReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
      case "ADD_TO_WISHLIST":
        return { productWishlist: [payload] };
      case "REMOVE_FROM_WISHLIST":
        console.log("REMOVE_FROM_WISHLIST");
        break;
      default:
        return state;
    }

  }

  const [state, dispatch] = useReducer(wishlistReducer, initialState);

  const addToWishlist = (props) => {
    dispatch({ type: "ADD_TO_WISHLIST", payload: props })
  }

  const removeFromWishlist = () => {
    dispatch({ type: "REMOVE_FROM_WISHLIST" })
  }

  const value = {
    addToWishlist: addToWishlist,
    removeFromWishlist: removeFromWishlist,
    state
  }

  return (

    <div className="App">

      <WishlistContext.Provider value={value}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/WishlistPage" element={<WishlistPage />} />
            <Route path="/CartPage" element={<CartPage />} />
          </Route>
        </Routes>
      </WishlistContext.Provider>

    </div>
  );
}

export default App;
