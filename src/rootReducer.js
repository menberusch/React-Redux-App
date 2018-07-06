import {ADD_TODO, REMOVE_TODO} from './actionCreators';

const initialState = {
  todos: [
    {
      task: 'Eat',
      id: 0
    }, 
    {
      task: 'Fuck',
      id: 1
    },
    {
      task: 'Win',
      id: 2
    }
  ],
  id: 2
};

export default function rootReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_TODO:
      let newState = {...state};
      newState.id++;
      return {
        ...state,
        todos: [...newState.todos, {task: action.todo, id: newState.id}]
      };
    case REMOVE_TODO:
      let todos = state.todos.filter(todo => todo.id !== action.id);
      return {...state, todos};
    default:
      return state;
  }
}