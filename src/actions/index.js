import * as types from '../constants/ActionTypes'

export const addTodo = (title, description) => ({type: types.ADD_TODO, title, description})
export const editTodo = (id, title, description) => ({ type: types.EDIT_TODO, id, title, description})
export const changeTodoState = (id, state) => ({ type: types.CHANGE_TODO_STATE, id, state})
export const changeTodoEditable = (id, state) => ({type: types.CHANGE_TODO_EDITABLE, id, state})

export const changeModalState = (state) => ({type: types.CHANGE_MODAL_STATE, state})
export const newModalState = (state) => ({type: types.NEW_MODAL_STATE, state})
