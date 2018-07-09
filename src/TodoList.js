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

  render() {
    let todos = this.props.todos.map((todo) => (
      <Todo 
        removeTodo={() => this.props.removeTodo(todo._id)} 
        toggleTodo={() => this.props.toggleTodo(todo)}
        key={todo._id} todo={todo} 
      />
    ));
    return (
      <div>
        <Route path="/todos/new" component={props => (
          <NewTodoForm {...props} handleSubmit={task => this.props.addTodo(task)} />
        )} />
        <Route exact path="/todos" component={() => <ul>{todos}</ul>} />
      </div>
    );
  }
}

const mapStateToProps = reduxState => ({ todos: reduxState.todos });

export default connect(mapStateToProps, {addTodo, removeTodo, toggleTodo, getTodos})(TodoList);