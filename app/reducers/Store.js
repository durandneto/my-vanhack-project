import Immutable from 'immutable'

import { GET_STORE_SUCCESS, GET_STORE_FAIL, GET_STORE_PRODUCTS_SUCCESS, GET_SELECTED_STORE_SUCCESS } from '../actions/StoreActions'

const UserRedux = Immutable.fromJS({
  term: '',
	data:[],
  selectedStore: {
    loadded:{
      data:false,
      products: false
    },
    data: {
        id: -1,
        name: '',
        address: '',
        cousineId: -1
      },
      products: [{
        id: -1,
        storeId: -1,
        name: '',
        description: '',
        price: -1
      }]
    }
	})

let defaultUserState = Immutable.fromJS(UserRedux)

function appReducer (state = defaultUserState, action) {

  switch ( action.type ) { 
  
    case GET_STORE_SUCCESS:
      return state.merge({
        data: action.response,
        term: state.get('term')
      })
  
    case GET_SELECTED_STORE_SUCCESS:
      return state.merge({
        data: state.get('data'),
        term: state.get('term'),
        selectedStore: {
          data: action.response[0],
          loadded: {
            data: true,
            products: state.get('selectedStore').get('loadded').get('products')
          },
          products: state.get('selectedStore').get('products'),
        }
      })
  	case GET_STORE_PRODUCTS_SUCCESS:
  		return state.merge({
  			data: state.get('data'),
        term: state.get('term'),
        selectedStore: {
          loadded: {
            data: state.get('selectedStore').get('loadded').get('data'),
            products: true
          },
          data: state.get('selectedStore').get('data'),
          products: action.response
        }
  		})
   
	default: 
		return state
	}
}

export default appReducer