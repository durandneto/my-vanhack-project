import Immutable from 'immutable'

import { LOADDING_ON, LOADDING_OFF } from '../actions'

const UserRedux = Immutable.fromJS({
	loadding: false,
	})

let defaultUserState = Immutable.fromJS(UserRedux)

function appReducer (state = defaultUserState, action) {

  switch ( action.type ) { 
    case LOADDING_ON:
      return state.merge({
        loadding:true,
      })
  	case LOADDING_OFF:
  		return state.merge({
  			loadding:false,
  		})
  	
	default: 
		return state
	}
}

export default appReducer