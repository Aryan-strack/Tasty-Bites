import { configureStore } from "@reduxjs/toolkit";
import reservationReducer from "./reservationSlice";
import orderReducer from "./orderSlice";
import contactReducer from './contactSlice';


const store = configureStore({
  reducer: {
    reservation: reservationReducer,
    order: orderReducer,
    contact: contactReducer,

  },
});

export default store;
