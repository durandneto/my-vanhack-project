import { CALL_API, CHAIN_API } from './../middleware/api'

export const GET_STORE_SUCCESS = Symbol('GET_STORE_SUCCESS') 
export const GET_STORE_FAIL = Symbol('GET_STORE_FAIL') 
export const TERM_INFO_CHANGED = Symbol('TERM_INFO_CHANGED') 
export const GET_STORE_PRODUCTS_SUCCESS = Symbol('GET_STORE_PRODUCTS_SUCCESS') 
export const GET_STORE_PRODUCTS_FAIL = Symbol('GET_STORE_PRODUCTS_FAIL') 
export const GET_SELECTED_STORE_SUCCESS = Symbol('GET_SELECTED_STORE_SUCCESS') 

export function getStore(term){
  return (dispatch, getState) => {
    const Store = getState().Store

    let url = '/Store'
    if ( term ) {
      url += '/search/term/' + term
    }

    dispatch({
      [CHAIN_API]: [
          ()=> {
            return {
              [CALL_API]: {
                method: 'get',
                type: 'external',
                path: url,
                successType: GET_STORE_SUCCESS,
                errorType: GET_STORE_FAIL
              }
            }
          }
        ]
    })
  }
}
export function getStoreAndProducts(term){
  return (dispatch, getState) => {

    let url = '/Store/search/term/' + term

    dispatch({
      [CHAIN_API]: [
          ()=> {
            return {
              [CALL_API]: {
                method: 'get',
                type: 'external',
                path: url,
                successType: GET_SELECTED_STORE_SUCCESS,
                errorType: GET_STORE_FAIL
              }
            }
          }, (response) => {
             return {
                [CALL_API]: {
                  method: 'get',
                  path: `/Store/${response[0].id}/products`,
                  successType: GET_STORE_PRODUCTS_SUCCESS,
                  errorType: GET_STORE_PRODUCTS_FAIL
                }
              }
          }
        ]
    })
}
}

export function onChangeTermInfo(event) {
  const target = event.target
  return {
    type: TERM_INFO_CHANGED,
    target
  }
}