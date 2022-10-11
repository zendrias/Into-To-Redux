import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { addTodo } from '../todoList/todoSlice.js'

function TodoInput(props) {
  // Variables
  let [inputValue, setInputValue] = useState("")
  const dispatch = useDispatch()

  // Event Handlers
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addTodo({ title: inputValue }))
  }

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" value={inputValue} placeholder="Add Todo" onChange={handleChange} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}

export default TodoInput;