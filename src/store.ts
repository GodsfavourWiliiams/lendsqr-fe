import { configureStore } from '@reduxjs/toolkit';
import dashboardReducer from "./logic/reducers";

export default configureStore({
  reducer: { dashboardReducer },
})