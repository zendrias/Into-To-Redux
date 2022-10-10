import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todos: [{
    id: 'hjgrf8%#$7tyeiu#$%rhbg8e7giub#$%#',
    todo: 'Walk The Dog',
    completed: false
  }]
}


export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => state.push(action.payload),
    deleteTodo: (state, action) => state.filter(todo => todo.id !== action.payload.id),
    markAsCompleted: (state, action) => state.map(todo => todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo)
  }
})


export const { addTodo, deleteTodo, markAsCompleted } = todoSlice.actions

export default todoSlice.reducer