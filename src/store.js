import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./users/userSlice";



export const store = configureStore({
  reducer: {   
    userData: UserReducer,
  },
});
