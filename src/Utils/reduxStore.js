import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";

const reduxStore = configureStore({
    reducer:{
        myStore:appSlice,
    }
})
export default reduxStore;