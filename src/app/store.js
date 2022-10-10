import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../components/todoList/todoSlice.js'

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  }
});