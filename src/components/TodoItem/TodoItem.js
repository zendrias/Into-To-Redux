import React from 'react';
import { useDispatch } from 'react-redux'
import { toggleComplete, deleteTodo } from '../todoList/todoSlice.js'

function TodoItem({ title, id, completed }) {
  let dispatch = useDispatch()

  const handleCompleteClick = () => {
    dispatch(toggleComplete(id))
  }

  const handleDelete = () => {
    dispatch(deleteTodo(id))
  }
  return (
    <div key={id}>
      <p>{title}</p>
      {completed ? (
        <button onClick={handleCompleteClick}>Mark As Incomplete</button>
      ) : (
        <button onClick={handleCompleteClick}>Mark As Completed</button>
      )}
      <button onClick={handleDelete}>Delete Todo</button>

    </div>
  );
}

export default TodoItem;