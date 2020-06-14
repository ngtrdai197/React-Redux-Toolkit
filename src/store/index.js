import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todos/todoSlice";

const allReducers = {
  todos: todoReducer,
};

export const store = configureStore({
  reducer: allReducers,
});
