export const SET_EMPLOYEES = 'employees/setEmployees'
export const SET_PAGE_NAME = 'pageName/setPageName'

export function setEmployees (payload) {
  return { type: SET_EMPLOYEES, payload }
}

export function setPageName (payload) {
  return { type: SET_PAGE_NAME, payload }
}

export function fetchEmployees (payload) {
  return function (dispatch) {
    return fetch('https://randomuser.me/api/?results=28')
  }
}