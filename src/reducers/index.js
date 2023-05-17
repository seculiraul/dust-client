import { combineReducers } from 'redux'
import authReducer from './authReducer'
import cartReducer from './cartReducer'
import orderReducer from './orderReducer'
import productsReducer from './productsReducer'

export default combineReducers({
  currentUser: authReducer,
  products: productsReducer,
  cartProducts: cartReducer,
})
