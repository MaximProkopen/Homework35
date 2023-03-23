import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    productWishlist: [],
};

export const wishlistSlice = createSlice({
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
  
  export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
  export default wishlistSlice.reducer;
