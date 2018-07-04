import * as ActionTypes from '../actions'
//import merge from 'lodash/merge'
//import paginate from './paginate'
import { combineReducers } from 'redux'

const logMsg = (state = '', action) => {
  switch (action.type) {
    case ActionTypes.SET_LOG_MSG:
      if (action.msg)
        return action.msg
      return state
    default:
      return state
  }
}

const modal = (state = { open: false, imagePath: '', caption: '' }, action) => {
  switch (action.type) {
    case ActionTypes.SET_MODAL_OPEN:
      return Object.assign({}, state, { open: action.open })
    case ActionTypes.SET_MODAL_IMG_PATH_CAPTION_OPEN:
      return Object.assign({}, state, { open: true, imagePath: action.path, caption: action.caption })
    default:
      return state
  }
}


const rootReducer = combineReducers({
  logMsg,
  modal,
})

export default rootReducer
