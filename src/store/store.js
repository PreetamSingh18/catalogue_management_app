import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice"
import categoryReducer from "./categoriesSlice";

const store= configureStore({
    reducer:{
      product:productReducer,
      categories:categoryReducer,
    },
});
export default store;