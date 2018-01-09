import {
  CHANGE_NEW_MODAL_STATE,
  CHANGE_EDIT_MODAL_STATE,
} from '../constants/ActionTypes'

const initialState = {
  state: false,
}

export function newModal(state = initialState, action) {
  switch (action.type) {
    case CHANGE_NEW_MODAL_STATE:
      return { state: action.state }
    default:
      return state;
  }
}

export function editModal(state = initialState, action) {
  switch (action.type) {
    case CHANGE_EDIT_MODAL_STATE:
      return { state: action.state }
    default:
      return state;
  }
}
