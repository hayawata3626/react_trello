import { combineReducers } from 'redux'
import todos from './todos'
import { newModal, editModal } from './modal'

const rootReducer = combineReducers({
  todos,
  newModal,
  editModal,
})

export default rootReducer
