import {ADD_TODO, REMOVE_TODO, TOGGLE_TODO} from './actionCreators';

const initialState = {
  todos: [
    {
      task: 'Eat',
      id: 0,
      completed: true
    }, 
    {
      task: 'Fuck',
      id: 1,
      completed: false
    },
    {
      task: 'Win',
      id: 2,
      completed: false
    }
  ],
  id: 2
};

export default function rootReducer(state = initialState, action) {
  let todos;
  switch(action.type) {
    case ADD_TODO:
      let newState = {...state};
      newState.id++;
      return {
        ...state,
        todos: [...newState.todos, {task: action.todo, id: newState.id}]
      };
    case REMOVE_TODO:
      todos = state.todos.filter(todo => todo.id !== action.id);
      return {...state, todos};
    case TOGGLE_TODO:
      todos = state.todos.map(todo => {
        if(todo.id === action.id) todo.completed = !todo.completed;
        return todo;
      });
      return {...state, todos};
    default:
      return state;
  }
}