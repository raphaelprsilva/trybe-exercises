import React, { Component } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
    };

    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(newTodo) {
    this.setState((prevState) => ({
      todos: prevState.todos.concat(newTodo),
    }))
  }

  render() {
    const { todos } = this.state;
    return (
      <div>
        <TodoInput addTodo={ this.addTodo } />
        <TodoList todos={ todos } />
      </div>
    )
  }
}
