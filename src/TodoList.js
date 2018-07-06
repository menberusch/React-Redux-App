import React, {Component} from 'react';
import Todo from './Todo';
import {connect} from 'react-redux';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: ''
    };
  }
  
  handleSubmit(e) {
    e.preventDefault();
    this.props.dispatch({
      type: 'ADD_TODO',
      todo: this.state.todo
    });
    e.target.reset();
  }

  handleChange(e) {
    this.setState({
      todo: e.target.value
    });
  }

  removeTodo(id) {
    this.props.dispatch({
      type: 'REMOVE_TODO',
      id
    })
  }

  render() {
    let todos = this.props.todos.map((todo, i) => (
      <Todo removeTodo={this.removeTodo.bind(this, todo.id)} key={i} task={todo.task} />
    ));
    return(
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label htmlFor="todo">Todo: </label>
          <input 
            type="text" 
            name="todo" 
            id="todo"
            onChange={this.handleChange.bind(this)}
          />
          <button>Add</button>
        </form>
        <ul>{todos}</ul>
      </div>
    )
  }
}

const mapStateToProps = reduxState => ({ todos: reduxState.todos });

export default connect(mapStateToProps)(TodoList);