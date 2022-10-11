import './App.css';
import TodoList from './components/todoList/TodoList';
import TodoInput from './components/todoInput/TodoInput.js'
function App() {
  return (
    <div className="App">
      <h1>Zena's Todo App</h1>
      < TodoInput />
      < TodoList />
    </div>
  );
}

export default App;
