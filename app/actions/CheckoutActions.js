import { CALL_API, CHAIN_API } from './../middleware/api'

export const ADD_PRODUCT_TO_CART = Symbol('ADD_PRODUCT_TO_CART') 

export function onAddProductToCart(store, product) {
  
  return {
    type: ADD_PRODUCT_TO_CART,
    store,
    product
  }
}