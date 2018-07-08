import {ADD_TODO, REMOVE_TODO, TOGGLE_TODO, GET_TODOS} from './actionCreators';

const initialState = {
  todos: []
};

export default function rootReducer(state = initialState, action) {
  let todos;
  console.log(action);
  switch(action.type) {
    case GET_TODOS:
      return {...state, todos: action.data}
    case ADD_TODO:
      return {...state, todos: [...state.todos, action.todo]}
    case REMOVE_TODO:
      todos = state.todos.filter(todo => todo._id !== action.id);
      return {...state, todos};
    case TOGGLE_TODO:
      todos = state.todos.map(todo => {
        if(todo._id === action.id) todo.completed = !todo.completed;
        return todo;
      });
      return {...state, todos};
    default:
      return state;
  }
}