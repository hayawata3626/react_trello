import * as types from '../constants/ActionTypes'

export const addTodo = (title, description) => {
  return {
    type: types.ADD_TODO,
    title,
    description,
  }
}
export const editTodo = (id, text) => ({ type: types.EDIT_TODO, id, text })

export const openModal = (state) => ({type: types.OPEN_MODAL, state})
export const closeModal = (state) => ({type: types.CLOSE_MODAL, state})
