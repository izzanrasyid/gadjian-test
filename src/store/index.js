import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import employeesReducer from './reducers/employee'

const reducer = combineReducers({
  employeesReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store