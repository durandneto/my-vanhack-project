export const LOADDING_ON = Symbol('LOADDING_ON') 
export const LOADDING_OFF = Symbol('LOADDING_OFF') 

export function loaddingON() {
  return {
    type: LOADDING_ON
  }
}
export function loaddingOFF() {
  return {
    type: LOADDING_OFF 
  }
}