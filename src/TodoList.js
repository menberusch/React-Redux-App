import React, {Component} from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import {connect} from 'react-redux';
import { addTodo, removeTodo, toggleTodo, getTodos } from './actionCreators'
import { Route } from 'react-router-dom';

class TodoList extends Component {
  componentDidMount() {
    this.props.getTodos();
  }

  handleAdd(task) {
    this.props.addTodo(task);
  }

  removeTodo(id) {
    this.props.removeTodo(id);
  }

  toggleTodo(id, completed) {
    this.props.toggleTodo(id, completed);
  }

  render() {
    console.log(this.props.todos);
    let todos = this.props.todos.map((todo, i) => (
      <Todo 
        removeTodo={this.removeTodo.bind(this, todo._id)} 
        toggleTodo={this.toggleTodo.bind(this, todo._id, todo.completed)}
        key={todo._id} todo={todo} />
    ));
    return (
      <div>
        <Route path="/todos/new" component={props => (
          <NewTodoForm {...props} handleSubmit={this.handleAdd.bind(this)} />
        )} />
        <Route exact path="/todos" component={() => <ul>{todos}</ul>} />
      </div>
    );
  }
}

const mapStateToProps = reduxState => ({ todos: reduxState.todos });

export default connect(mapStateToProps, {addTodo, removeTodo, toggleTodo, getTodos})(TodoList);