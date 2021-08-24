import React, { useContext, useState } from 'react';
import TodoContext from '../context/TodoContext';

function TodoInput() {
  const { addTodo } = useContext(TodoContext);
  const [newTodo, setNewTodo] = useState('');

  const handleChange = ({ target }) => {
    setNewTodo(target.value);
  }

  const handleClick = () => {
    addTodo(newTodo);
    setNewTodo('');
  }

  return (
    <div>
      <label htmlFor="todo">
        Insira uma tarefa:
        <input
          type="text"
          onChange={ handleChange }
          value={ newTodo }
          name="todo"
          id="todo"
        />
      </label>
      <button type="button" onClick={ handleClick }>Inserir tarefa</button>
    </div>
  );
}

export default TodoInput;
