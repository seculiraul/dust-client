const { createSlice } = require('@reduxjs/toolkit')

const cartSlice = createSlice({
  name: 'cartItems',
  initialState: [],
  reducers: {
    addProductToCart: (state, action) => {
      const { nameAndSize, price } = action.payload

      if (state.find((el) => el.nameAndSize === nameAndSize)) {
        return state.map((item) => {
          if (item.nameAndSize === nameAndSize) {
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
        console.log({
          ...action.payload,
        })
        return [
          ...state,
          {
            ...action.payload,
            quantity: 1,
            totalPrice: price,
          },
        ]
      }
    },
    editCartItem: (state, action) => {
      const { product, quantity } = action.payload
      return state.map((el) => {
        if (el.nameAndSize === product.nameAndSize) {
          return {
            ...el,
            quantity,
            totalPrice: el.price * quantity,
          }
        } else {
          return el
        }
      })
    },
    removeCartItem: (state, action) => {
      return state.filter(
        (el) => el.nameAndSize !== action.payload.item.nameAndSize
      )
    },
  },
})

export const { addProductToCart, editCartItem, removeCartItem } =
  cartSlice.actions

export { cartSlice }
