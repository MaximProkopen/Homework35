import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    productWishlist: [],
};

export const wishlistReducer = createSlice({
    name: "product",
    initialState: initialState,
    reducers: {
      addToWishlist: (state, action) => {
        state.productWishlist.push(action.payload);
      },
      removeFromWishlist: (state, action) => {
        state.productWishlist = state.productWishlist.filter(
          (product) => product.id !== action.payload
        );
      },
    },
  });
  
  export const { addToWishlist, removeFromWishlist } = wishlistReducer.actions;
  export default wishlistReducer.reducer;
