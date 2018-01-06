import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
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
    tasks: []
  }
]

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          completed: false,
          text: action.text
        }
      ]

    case DELETE_TODO:
      return state.filter(todo =>
        todo.id !== action.id
      )

    case EDIT_TODO:
      return state.map(todo =>
        todo.id === action.id ?
          { ...todo, text: action.text } :
          todo
      )

    default:
      return state
  }
}
