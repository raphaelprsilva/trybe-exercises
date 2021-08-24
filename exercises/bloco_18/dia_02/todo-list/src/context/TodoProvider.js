import React from 'react';
import { useState } from 'react';
import TodoContext from './TodoContext';

function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos(todos.concat(newTodo));
  };

  const contextValue = {
    todos,
    addTodo,
  };

  return (
    <div>
      <TodoContext.Provider value={ contextValue }>
        { children }
      </TodoContext.Provider>
    </div>
  );
}

export default TodoProvider;