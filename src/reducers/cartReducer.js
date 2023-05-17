import { ADD_TO_CART, DELETE_FROM_CART, EDIT_CART_ITEM } from '../actions'

export default (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log(action.payload)
      console.log(state)
      if (state.find((el) => el.nameAndSize === action.payload.nameAndSize)) {
        return state.map((item) => {
          if (item.nameAndSize === action.payload.nameAndSize) {
            return {
              ...item,
              quantity: item.quantity + 1,
              totalPrice: item.totalPrice + item.price,
            }
          } else {
            return item
          }
        })
      } else {
        return [...state, action.payload]
      }
    case EDIT_CART_ITEM: {
      return state.map((el) => {
        console.log(el.price * action.payload.quantity)
        if (el.nameAndSize === action.payload.item.nameAndSize) {
          return {
            ...el,
            quantity: action.payload.quantity,
            totalPrice: el.price * action.payload.quantity,
          }
        } else {
          return el
        }
      })
    }
    case DELETE_FROM_CART: {
      return state.filter(
        (el) => el.nameAndSize !== action.payload.item.nameAndSize
      )
    }
    default:
      return state
  }
}
