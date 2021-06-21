import { SET_EMPLOYEES } from '../action'

const initialState = {
  employees: []
}

export default function employeesReducer (state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case SET_EMPLOYEES:
      return { ...state, employees: payload }
    default:
      return state
  }
}