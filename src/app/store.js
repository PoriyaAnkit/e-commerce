import { configureStore } from "@reduxjs/toolkit";
import cartslice from "../featyre/itemcart";

export const store = configureStore({
    reducer :{
        cart : cartslice
    }
})