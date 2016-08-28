import Immutable from 'immutable'
var $ = require('jquery')

export const BASE_URL = "http://simuladoracoes.hackathon.com.br"

export const FETCH_ACOES_REQUEST = "FETCH_ACOES_REQUEST"
export const FETCH_ACOES_RESULT = "FETCH_ACOES_RESULT"

export const fetchAcoes = function(userId = 1) {
  return (dispatch) => {
    dispatch({ type: FETCH_ACOES_REQUEST, payload: { userId } })
    $.getJSON(BASE_URL + "/Acoes/" + userId)
      .done(response => {
        console.log("GOT RESPONSE", response)
        dispatch({ type: FETCH_ACOES_RESULT, payload: response.ReturnObject })
      })
  }
}

const DEFAULT_STATE = Immutable.fromJS({
  availableOptions: []
})

const venderReducer = (state = DEFAULT_STATE, action) => {
  console.log("VENDER REDUCER", state, action)
  switch(action.type) {
    case FETCH_ACOES_REQUEST:
      return state
    case FETCH_ACOES_RESULT:
      return state.set('availableOptions', Immutable.fromJS(action.payload))
    default:
      return state
  }
}

export default venderReducer
