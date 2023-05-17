import { FETCH_PRODUCTS } from '../actions/FetchProducts'

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return [...action.payload.data.products]
    default:
      return state
  }
}
