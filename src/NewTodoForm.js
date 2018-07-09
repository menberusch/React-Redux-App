import React, {Component} from 'react';

export default class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: ''
    };
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit(this.state.task);
    e.target.reset();
    this.props.history.push('/todos');
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label htmlFor="task">Task: </label>
        <input 
          type="text" 
          name="task" 
          id="task"
          onChange={e => this.setState({ task: e.target.value })} />
        <button>Add a Todo!</button>
      </form>
    );
  }
}