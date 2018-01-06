import {OPEN_MODAL, CLOSE_MODAL} from '../constants/ActionTypes'

const initialState = {
  state: false,
}

export default function modal(state = initialState, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return { state: true }
    case CLOSE_MODAL:
      return { state: false }
    default:
      return state;
  }
}