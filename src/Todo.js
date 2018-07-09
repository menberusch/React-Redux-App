import React from "react";

const Todo = ({todo, removeTodo, toggleTodo}) => (
  <li>
    <span 
      onClick={toggleTodo}
      style={{textDecoration: todo.completed ? 'line-through' : 'none'}}
    >
      {todo.task}
    </span>
    <button onClick={removeTodo}>X</button>
  </li>
);

export default Todo;