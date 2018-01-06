import {CHANGE_MODAL_STATE} from '../constants/ActionTypes'

const initialState = {
  state: false,
}

export default function modal(state = initialState, action) {
  switch (action.type) {
    case CHANGE_MODAL_STATE:
      return { state: action.state }
    default:
      return state;
  }
}
