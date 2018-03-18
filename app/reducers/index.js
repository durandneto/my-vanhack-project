import { combineReducers } from 'redux'
import User from './User'
import Error from './Error'
import App from './App'
import Checkout from './Checkout'
import Store from './Store'

const rootReducer = combineReducers({
  User,
  Store,
  Checkout,
  App,
  Error
})

export default rootReducer
