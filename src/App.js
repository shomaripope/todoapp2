import React, { Component } from 'react';
import Todos from './components/Todos';


class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'learn react'},
      {id: 2, content: 'learn django'},
      {id: 3, content: 'do portfolio'}
    ]
  }
  deleteTodo = (id) => {
    console.log(id)
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos
    })
  }
  render() {
    return (
      <div className="todo-app container">
      <h1 className="center blue-text">Todo's</h1>
       <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
      </div>
    );
  }
}

export default App;
