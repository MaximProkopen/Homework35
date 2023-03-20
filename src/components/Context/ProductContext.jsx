import { useReducer, createContext } from "react";
import { wishlistReducer, initialState } from "../../reducer/Reducer";
export const WishlistContext = createContext(null);

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(wishlistReducer, initialState);

  const addToWishlist = (product) => {
    dispatch({ type: "ADD_TO_WISHLIST", payload: product });
  };

  const removeFromWishlist = (productId) => {
    dispatch({ type: "REMOVE_FROM_WISHLIST", payload: productId });
  };

  const value = {
    addToWishlist: addToWishlist,
    removeFromWishlist: removeFromWishlist,
    state: state,
  };

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
};
