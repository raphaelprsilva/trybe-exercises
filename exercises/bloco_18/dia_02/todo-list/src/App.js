import React from 'react';
import { useState } from 'react/cjs/react.development';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  const [todos, setNewTodo] = useState([]);

  const addTodo = (newTodo) => {
    setNewTodo(todos.concat(newTodo));
  };

  return (
    <div>
      <TodoInput addTodo={ addTodo } />
      <TodoList todos={ todos } />
    </div>
  );
}

export default App;
