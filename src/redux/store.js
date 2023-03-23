import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./wishlistSlice";

export default configureStore({
    reducer: {
        product: productReducer,
    },
});