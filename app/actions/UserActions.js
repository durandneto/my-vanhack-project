import { CALL_API, CHAIN_API } from './../middleware/api'

export const LOGING_SUCCES = Symbol('LOGING_SUCCES') 
export const LOGING_FAIL = Symbol('LOGING_FAIL') 
export const LOGOUT = Symbol('LOGOUT') 
export const USER_INFO_CHANGED = Symbol('USER_INFO_CHANGED') 

export function auth(){
  return (dispatch, getState) => {
    const User = getState().User 
    dispatch({
      [CHAIN_API]: [
          ()=> {
            return {
              [CALL_API]: {
                method: 'post',
                type: 'external',
                path: '/auth',
                body:{
                  email: User.get('model').get('email'),
                  password:User.get('model').get('password')
                },
                successType: LOGING_SUCCES,
                
                errorType: LOGING_FAIL
              }
            }
          }, (response) => {
            console.log(response) 
          }
        ]
    })
  }
}

export function onChangeUserInfo(event) {
  const target = event.target
  return {
    type: USER_INFO_CHANGED,
    target
  }
}

export function onLogout() {
  return {
    type: LOGOUT
  }
}