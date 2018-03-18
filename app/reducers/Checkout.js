import Immutable from 'immutable'

import { ADD_PRODUCT_TO_CART } from '../actions/CheckoutActions'

const UserRedux = Immutable.fromJS({
 deliveryAddress: '',
 contact: '',
 orderItems: [],
 total: 0,
 status: 'DELIVERED'
})

let defaultUserState = Immutable.fromJS(UserRedux)

function appReducer (state = defaultUserState, action) {

  switch ( action.type ) { 
  
    case ADD_PRODUCT_TO_CART:
    const order = state.get('orderItems').push({ 
        storeId: action.store.get('data').get('id'), 
        productId:action.product.get('id')
      })

    return state.mergeDeep({
      orderItems: order
    })
   
	default: 
		return state
	}
}

export default appReducer