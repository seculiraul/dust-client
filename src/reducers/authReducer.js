import Cookies from 'js-cookie'
import { SIGN_IN, SIGN_UP } from '../actions'
import jwtDecode from 'jwt-decode'

export default (state = {}, action) => {
  switch (action.type) {
    case SIGN_IN:
      setCookie(action.payload?.data?.token)
      console.log(jwtDecode(action.payload?.data?.token))
      return { ...action.payload }
    case SIGN_UP:
      return { ...action.payload }
    default:
      return state
  }
}

const setCookie = (value) => {
  Cookies.set('jwt', value)
}
