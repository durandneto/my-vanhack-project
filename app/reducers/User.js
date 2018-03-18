import Immutable from 'immutable'

import { LOGING_SUCCES, LOGING_FAIL, USER_INFO_CHANGED, LOADDING, LOGOUT } from '../actions/UserActions'

const UserRedux = Immutable.fromJS({
	loadding: false,
	logged: false,
	session: '',
		model: {
			id: -1,
			email: '',
			name: '',
			address: '',
			creation: '',
			password: ''
		}
	})

let defaultUserState = Immutable.fromJS(UserRedux)

function appReducer (state = defaultUserState, action) {

  switch ( action.type ) { 
  
  	case LOGING_SUCCES:
  		return state.mergeDeep({
  			logged:true,
  			session: action.response
  		})
    case LOGOUT:
      return state.mergeDeep({
          logged: false,
          session: ''
        })
  	case LOGING_FAIL:
  		return state
  	case USER_INFO_CHANGED:
  		switch ( true ) {
  			case action.target.name === 'email':
  				return state.mergeDeep({
  					model: {
  						email: action.target.value
  					}
  				})
  				break
  			case action.target.name === 'password':
  				return state.mergeDeep({
  					model: {
  						password: action.target.value
  					}
  				})
  				break
  		}

  		return state
  		break 
	default: 
		return state
	}
}

export default appReducer