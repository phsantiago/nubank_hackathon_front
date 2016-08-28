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
        dispatch({ type: FETCH_ACOES_RESULT, payload: response.ReturnObject })
      })
  }
}

export const setOptionQty = (EmpresaId, QuantidadeEmEstoque, QuantidadeASerVendida) => ({
  type: SET_OPTION_QTY,
  payload: { EmpresaId, QuantidadeEmEstoque, QuantidadeASerVendida }
})

const DEFAULT_STATE = Immutable.fromJS({
  availableOptions: []
})

const venderReducer = (state = DEFAULT_STATE, action) => {
  switch(action.type) {
    case SET_OPTION_QTY:
      let index = -1,
          cur = null
      for(var i = 0; i < state.get('availableOptions').size; i += 1) {
        cur = state.get('availableOptions').get(i)
        if(cur.get('EmpresaId') == action.payload.EmpresaId){
          index = i
          break
        }
      }
      if(index > -1) {
        let newOption = state.get('availableOptions')
                             .get(index)
                             .set('QuantidadeASerVendida', action.payload.QuantidadeASerVendida)
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
      let options = action.payload.map((o) => ({ ...o, QuantidadeASerVendida: 0 }))
      return state.set('availableOptions', Immutable.fromJS(options))
    default:
      return state
  }
}

export default venderReducer
