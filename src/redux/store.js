import { configureStore } from "@reduxjs/toolkit";
import productListSlice from "./productListSlice";

export default configureStore({
    reducer: {
        productList: productListSlice,
    },
});
