import Immutable from 'immutable'
var $ = require('jquery')

export const BASE_URL = "http://simuladoracoes.hackathon.com.br"

export const FETCH_ACOES_REQUEST = "FETCH_ACOES_REQUEST"
export const FETCH_ACOES_RESULT = "FETCH_ACOES_RESULT"
export const SET_OPTION_QTY = "SET_OPTION_QTY"

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

export const setOptionQty = (EmpresaId, QuantidadeEmEstoque) => ({
  type: SET_OPTION_QTY,
  payload: { EmpresaId, QuantidadeEmEstoque }
})

const DEFAULT_STATE = Immutable.fromJS({
  availableOptions: []
})

const venderReducer = (state = DEFAULT_STATE, action) => {
  console.log("VENDER REDUCER", state, action)
  switch(action.type) {
    case SET_OPTION_QTY:
      let index = -1,
          cur = null
      for(var i = 0; i < state.get('availableOptions').size; i += 1) {
        cur = state.get('availableOptions').get(i)
          console.log("ITER cur=", cur.get('EmpresaId'), action.payload.EmpresaId)
        if(cur.get('EmpresaId') == action.payload.EmpresaId){
          index = i
          break
        }
      }
      console.log("FIOUDN INDEX IS", index)
      if(index > -1) {
        let newOption = state.get('availableOptions')
                             .get(index)
                             .set('QuantidadeEmEstoque', action.payload.QuantidadeEmEstoque)

        let newOptions = state.get('availableOptions')
                              .set(index, newOption)
        return state.set('availableOptions', newOptions)
      } else {
        return state
      }
    case FETCH_ACOES_REQUEST:
      return state
    case FETCH_ACOES_RESULT:
      return state.set('availableOptions', Immutable.fromJS(action.payload))
    default:
      return state
  }
}

export default venderReducer
