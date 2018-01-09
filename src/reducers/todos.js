import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  CHANGE_TODO_STATE,
  CHANGE_TODO_EDITABLE,
} from '../constants/ActionTypes'

export const status = {
  todo: 0,
  progress: 1,
  done: 2
}

const initialState = [
  {
    id: 0,
    title: "Redux",
    description: "Use Redux",
    status: status.todo,
    editable: false,
    tasks: []
  }
]

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      const todo = Object.assign({}, initialState[0]);
      todo.title = action.title
      todo.description = action.description
      todo.id++;
      return [...state, todo];

    case DELETE_TODO:
      return state.filter(todo =>
        todo.id !== action.id
      )

    case EDIT_TODO:
      console.log(action);
      return state.map(todo =>
        todo.id === action.id ? { ...todo, title: action.title, description: action.description } : todo
      )

    case CHANGE_TODO_EDITABLE:
      return state.map(todo => {
        if (todo.id === action.id) {
          todo.editable = !todo.editable
          return todo
        }
        return todo
      })

    case CHANGE_TODO_STATE:
      return state.map(todo => {
        if (todo.id === action.id) {
          if ( (todo.status + action.state) < 0) return todo;
          if ( (todo.status + action.state) > 2) return todo;
          return { ...todo, status: todo.status + action.state }
        } else {
          return todo
        }
      })

    default:
      return state
  }
}
