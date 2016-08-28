import Immutable from 'immutable'
var $ = require('jquery')

export const BASE_URL = "http://simuladoracoes.hackathon.com.br"
export const FETCH_EMPRESAS = "FETCH_EMPRESAS"
export const FETCH_EMPRESAS_RESULT = "FETCH_EMPRESAS_RESULT"
export const FETCH_NOTICIAS = "FETCH_NOTICIAS"
export const FETCH_NOTICIAS_RESULT = "FETCH_NOTICIAS_RESULT"
export const SELECT_STOCK_OPTION = "SELECT_STOCK_OPTION"

export const fetchNoticias = function(idEmpresa) {
  return (dispatch) => {
    dispatch({ type: FETCH_NOTICIAS, payload: idEmpresa })
    $.getJSON(BASE_URL + "/Noticias/Listar/" + idEmpresa)
      .done(response => {
        console.log("GOT RESPONSE", response)
        dispatch({ type: FETCH_NOTICIAS_RESULT, payload: response.ReturnObject })
    })
  }
}

export const fetchEmpresas = function() {
  return (dispatch) => {
    dispatch({ type: FETCH_EMPRESAS })
    $.getJSON(BASE_URL + "/Empresa/ListarEmpresas")
      .done(response => {
        console.log("GOT RESPONSE", response)
        dispatch({ type: FETCH_EMPRESAS_RESULT, payload: response })
      })
  }
}

export const selectStockOption = (option) => {
  console.log("OPTION", option)
  return (dispatch) => {
    dispatch({
      type: SELECT_STOCK_OPTION,
      payload: option
    })
    dispatch(fetchNoticias(option.IdEmpresa))
  }
}

const DEFAULT_STATE = Immutable.fromJS({
  selectedOption: null,
  visibleStockOptions: [],
  newsData: []
})

const comprarReducer = (state = DEFAULT_STATE, action) => {
  if(state)
    console.log("STATE", state.toJS())
  switch(action.type) {
    case FETCH_NOTICIAS:
      return state
    case FETCH_NOTICIAS_RESULT:
      console.log("QUERY RESULT", action.payload)
      return state.set("newsData", action.payload)
    case FETCH_EMPRESAS:
      return state
    case FETCH_EMPRESAS_RESULT:
      console.log("QUERY RESULT", action.payload)
      return state.set("visibleStockOptions", action.payload)
    case SELECT_STOCK_OPTION:
      return state.set('selectedOption', action.payload)
    default:
      return state
  }
}

export default comprarReducer
