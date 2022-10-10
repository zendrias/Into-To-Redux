import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo, markAsCompleted } from './todoSlice'

function TodoList(props) {
  const todos = useSelector(state => state.todos.todos)
  const dispatch = useDispatch()

  return (
    <div>
      {todos.map((todo) => (
        <>
          <p>{todo.todo}</p>
          <button onClick={dispatch(deleteTodo(todo))}>Delete Todo</button>
          <button onClick={dispatch(markAsCompleted(todo))}>Mark As Completed</button>
        </>
      ))}
    </div>
  );
}

export default TodoList;