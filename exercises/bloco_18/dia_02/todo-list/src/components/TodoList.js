import React, { useContext } from 'react'
import TodoContext from '../context/TodoContext';

function TodoList() {
  const { todos } = useContext(TodoContext);
  return (
    <ul>
      {
        todos.map((todo, index) => <li key={ index }>{ todo }</li>)
      }
    </ul>
  );
}

export default TodoList;
