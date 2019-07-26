import { VisibilityFilters,
         SET_VISIBILITY_FILTER,
         ADD_TODO,
         TOGGLE_TODO} from './Actions.js'
import { combineReducers } from 'redux';

const { SHOW_ALL } = VisibilityFilters;

const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
}

/* +state+ is the array with todos */
const todos = (state = [], action) => {
  switch(action.type) {
    case ADD_TODO:
      return [...state,
         {
           text: action.text,
           completed: false
         }]
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {completed: !todo.completed})
        }
        else {
          return Object.assign({}, todo)
        }
      })
    default:
      return state
  }
}

const visibilityFilter = (state = SHOW_ALL, action) => {
  switch(action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

// const todoApp = (state = initialState, action) => {
//   return {
//     visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//     todos: todos(state.todos, action)
//   }
// }

const todoApp = combineReducers({
  visibilityFilter, todos
})

export default todoApp;
