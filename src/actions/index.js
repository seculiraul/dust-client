/* eslint-disable */
import axios from 'axios'
import { SIGN_IN } from './SignIn'
import { SIGN_UP } from './SignUp'
import { FETCH_PRODUCTS } from './FetchProducts'
import { ADD_TO_CART } from './AddToCart'
import { POST_ORDER } from './PostOrder'
import { EDIT_CART_ITEM } from './EditCartItem'
import { DELETE_FROM_CART } from './DeleteFromCart'

export const signIn = (email, password) => async (dispatch) => {
  const response = await axios.post('http://localhost:3001/api/auth/signin', {
    email,
    password,
  })
  console.log(response)
  dispatch({ type: SIGN_IN, payload: response.data })
}

export const signUp = (registerData) => async (dispatch) => {
  const { data } = await axios.post('http://localhost:3001/api/auth/signup', {
    ...registerData,
  })
  console.log(data)
  dispatch({ type: SIGN_UP, payload: data })
}

export const fetchProducts = (options) => async (dispatch) => {
  const { data } = await axios.get('http://localhost:3002/api/v1/products', {
    params: options,
  })
  dispatch({ type: FETCH_PRODUCTS, payload: data })
}

export const postOrder = (products, transportCost, info) => {
  return async (dispatch) => {
    const order = {
      products: products.map((prod) => {
        return {
          productId: prod.id,
          quantity: prod.quantity,
        }
      }),
      total:
        products
          .map((product) => product.price * product.quantity)
          .reduce((prev, crt) => prev + crt, 0) + transportCost,
      ...info,
    }

    console.log(order)
    const { data } = await axios.post(
      'http://localhost:3003/api/v1/orders',
      order
    )
    dispatch({ type: POST_ORDER, payload: data })
  }
}

export const addToCart = (product, size, quantity) => (dispatch) => {
  const productSummary = {
    id: product._id,
    code: product.code,
    displayImage: product.displayImage,
    nameAndSize: `${product.code}-${size.toLowerCase()}`,
    name: product.name,
    price: product.price,
    image: product.displayImage,
    size,
    quantity,
    totalPrice: product.price * quantity,
  }
  dispatch({ type: ADD_TO_CART, payload: { ...productSummary } })
}

export const editCartItem = (item, quantity) => (dispatch) => {
  dispatch({ type: EDIT_CART_ITEM, payload: { item, quantity } })
}

export const deleteCartItem = (item) => (dispatch) => {
  dispatch({ type: DELETE_FROM_CART, payload: { item } })
}

export * from './SignIn'
export * from './SignUp'
export * from './FetchProducts'
export * from './AddToCart'
export * from './PostOrder'
export * from './EditCartItem'
export * from './DeleteFromCart'
