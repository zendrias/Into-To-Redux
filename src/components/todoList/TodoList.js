import { useDispatch, useSelector } from 'react-redux'
import { initializeConnect } from 'react-redux/es/components/connect';
import TodoItem from '../TodoItem/TodoItem'

// import { deleteTodo, markAsCompleted } from './todoSlice'

function TodoList(props) {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()

  return (
    <div>
      {todos.map((todo) => (
        < TodoItem title={todo.title} id={todo.id} completed={todo.completed} key={todo.id} />
      ))}
    </div>
  );
}

export default TodoList;

