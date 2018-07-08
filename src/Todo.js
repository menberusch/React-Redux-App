import React from "react";

const Todo = ({todo, removeTodo, toggleTodo}) => {
  console.log(todo);
  return (
  <li>
    <span 
      onClick={toggleTodo}
      style={{textDecoration: todo.completed ? 'line-through' : 'none'}}
    >
      {todo.task}
    </span>
    <button onClick={removeTodo}>X</button>
  </li>
)};

export default Todo;