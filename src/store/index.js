import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import employeesReducer from './reducers/employee'
import pageReducer from './reducers/page'

const reducer = combineReducers({
  employeesReducer, pageReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store