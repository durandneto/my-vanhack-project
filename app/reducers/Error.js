import Immutable from 'immutable'

import { LOGING_FAIL } from '../actions/UserActions'

const ErrorrRedux = Immutable.fromJS({
	
	})

let defaultUserState = Immutable.fromJS(ErrorrRedux)

function appReducer (state = defaultUserState, action) {

  switch ( action.type ) { 
  	case LOGING_FAIL:
  		console.log('errorrrrr',action.statusCode)
  		return state
  		break 
	default: 
		return state
	}
}

export default appReducer