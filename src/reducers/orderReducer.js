import { POST_ORDER } from '../actions'

export default (state = [], action) => {
  switch (action.type) {
    case POST_ORDER:
      console.log(action.payload.data)
      return state
    default:
      return state
  }
}
