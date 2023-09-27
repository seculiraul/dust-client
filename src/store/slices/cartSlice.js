const { createSlice } = require('@reduxjs/toolkit')

const calculateTotal = (arr) => {
  return arr.map((item) => item.totalPrice).reduce((prev, crt) => prev + crt, 0)
}

const cartSlice = createSlice({
  name: 'cartDetails',
  initialState: {
    items: [],
    totalCart: 0,
  },
  reducers: {
    addProductToCart: (state, action) => {
      const { _id, code, price, displayImage, name, size } = action.payload
      const nameAndSize = code + size

      if (state.items.find((el) => el.nameAndSize === nameAndSize)) {
        const cartItems = state.items.map((item) => {
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
        return {
          items: cartItems,
          totalCart: state.totalCart + price,
        }
      } else {
        return {
          items: [
            ...state.items,
            {
              _id,
              nameAndSize,
              price,
              displayImage,
              name,
              size,
              quantity: 1,
              totalPrice: price,
            },
          ],
          totalCart: state.totalCart + price,
        }
      }
    },
    editCartItem: (state, action) => {
      const { product, quantity } = action.payload
      const cartItems = state.items.map((el) => {
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
      const totalPrice = calculateTotal(cartItems)

      return { items: cartItems, totalCart: totalPrice }
    },

    removeCartItem: (state, action) => {
      const cartItems = state?.items?.filter(
        (el) => el.nameAndSize !== action.payload?.nameAndSize
      )
      const totalPrice = calculateTotal(cartItems)

      return { items: cartItems, totalCart: totalPrice }
    },
  },
})

export const { addProductToCart, editCartItem, removeCartItem } =
  cartSlice.actions

export { cartSlice }
