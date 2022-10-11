import { createSlice } from '@reduxjs/toolkit'

const initialState = []


export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        completed: false
      }
      state.push(newTodo)
    },
    deleteTodo: (state, action) => state.filter(todo => todo.id !== action.payload),

    toggleComplete: (state, action) => {
      let index = state.findIndex(todo => todo.id === action.payload)
      state[index].completed = !state[index].completed
    }
  }
})


export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions

export default todoSlice.reducer