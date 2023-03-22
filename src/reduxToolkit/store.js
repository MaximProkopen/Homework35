import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./ReduxToolkit";

export default configureStore({
    reducer: {
        product: productReducer,
    },
});