import * as types from '../constants/ActionTypes'

export const addTodo = (title, description) => {
  return {
    type: types.ADD_TODO,
    title,
    description,
  }
}
export const editTodo = (id, text) => ({ type: types.EDIT_TODO, id, text })

export const changeModalState = (state) => ({type: types.CHANGE_MODAL_STATE, state})
