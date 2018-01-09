import * as types from '../constants/ActionTypes'

export const addTodo = (title, description) => ({type: types.ADD_TODO, title, description})
export const editTodo = (id, title, description) => ({ type: types.EDIT_TODO, id, title, description})
export const deleteTodo = (id) => ({type: types.DELETE_TODO, id})
export const changeTodoState = (id, state) => ({ type: types.CHANGE_TODO_STATE, id, state})
export const changeTodoEditable = (id, state) => ({type: types.CHANGE_TODO_EDITABLE, id, state})

export const changeNewModalState = (state) => ({type: types.CHANGE_NEW_MODAL_STATE, state})
export const changeEditModalState = (state) => ({type: types.CHANGE_EDIT_MODAL_STATE, state})
