import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import seacrhSlice from "./seacrhSlice";
import chatSlice from "./chatSlice";

const store=configureStore({
reducer:{
    app:appSlice,
    search:seacrhSlice,
    chat:chatSlice,
}
});

export default store;