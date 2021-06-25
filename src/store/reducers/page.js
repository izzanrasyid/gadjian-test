import { SET_PAGE_NAME } from '../action'

const initialState = {
  pageName: ''
}

export default function pageReducer (state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case SET_PAGE_NAME:
      return { ...state, pageName: payload }
    default:
      return state
  }
}