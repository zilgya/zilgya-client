import { ADD_TO_CART, COUNTER_DOWN, COUNTER_UP, DELETE_CART, DELETE_FROM_CART } from "./actionString";

export const addToCartAction = (id, name, pict, quantity, price) => ({
  type: ADD_TO_CART,
  payload: { id, name, pict, quantity, price }

})

export const deleteFromCartAction = (id) => ({
  type: DELETE_FROM_CART,
  payload: id
})

export const counterUpByIdAction = (id) => ({
  type: COUNTER_UP,
  payload: { id }
})

export const counterDownByIdAction = (id) => ({
  type: COUNTER_DOWN,
  payload: { id }
})

export const deleteCartAction = () => ({
  type: DELETE_CART,

})