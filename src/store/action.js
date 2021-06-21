export const SET_EMPLOYEES = 'employees/setEmployees'

export function setEmployees (payload) {
  return { type: SET_EMPLOYEES, payload }
}

export function fetchEmployees (payload) {
  return function (dispatch) {
    return fetch('https://randomuser.me/api/?results=28')
  }
}