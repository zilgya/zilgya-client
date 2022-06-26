import { ADD_TO_CART, COUNTER_DOWN, COUNTER_UP, DELETE_CART, DELETE_FROM_CART } from "../actionCreator/actionString";

const initialState = {
  cartItem: []
}

export const cartReducer = (prevState = initialState, action) => {
  let prevCart = [...prevState.cartItem]
  let filterCart
  if (action.payload) {
    filterCart = prevCart.findIndex(item => item.id === action.payload.id)
  }
  switch (action.type) {
    case ADD_TO_CART:
      if (filterCart > -1) {
        prevCart[filterCart].quantity += action.payload.quantity
        return { ...prevState, cartItem: prevCart }
      }
      return { ...prevState, cartItem: [...prevState.cartItem, action.payload] };

    case DELETE_FROM_CART:
      let cartFilter = prevCart.filter(item => item.id !== action.payload)
      return { ...prevState, cartItem: cartFilter }

    case COUNTER_UP:
      prevCart[filterCart].quantity += 1
      return { ...prevState, cartItem: prevCart }

    case COUNTER_DOWN:
      prevCart[filterCart].quantity -= 1
      return { ...prevState, cartItem: prevCart }

    case DELETE_CART:
      return initialState

    default:
      return prevState
  }
}