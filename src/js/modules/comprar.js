import Immutable from 'immutable'
import { fetchUserProfile } from './user'
var $ = require('jquery')

export const BASE_URL = "http://simuladoracoes.hackathon.com.br"
export const FETCH_EMPRESAS = "FETCH_EMPRESAS"
export const FETCH_EMPRESAS_RESULT = "FETCH_EMPRESAS_RESULT"
export const FETCH_NOTICIAS = "FETCH_NOTICIAS"
export const FETCH_NOTICIAS_RESULT = "FETCH_NOTICIAS_RESULT"
export const SELECT_STOCK_OPTION = "SELECT_STOCK_OPTION"
export const BUY_STOCK_OPTION_REQUEST = "BUY_STOCK_OPTION_REQUEST"
export const BUY_STOCK_OPTION_RESULT = "BUY_STOCK_OPTION_RESULT"
export const FETCH_COTACAO_REQUEST = "FETCH_COTACAO_REQUEST"
export const FETCH_COTACAO_RESULT = "FETCH_COTACAO_RESULT"

// historico da cotacao
export const fetchCotacao = (IdEmpresa) => {
  return (dispatch) => {
    dispatch({ type: FETCH_COTACAO_REQUEST, payload: { IdEmpresa } })
    $.getJSON(BASE_URL + '/Empresa/Grafico?idEmpresa=' + IdEmpresa)
      .done((response) => {
        console.log("GOT RESPONSE", response)
        if(response && response.length > 0)
          dispatch({ type: FETCH_COTACAO_RESULT, payload: response[0].Coordenadas })
      })
  }
}

export const buyStockOptions = (option, quantidade) => {
  return (dispatch) => {
    dispatch({ type: BUY_STOCK_OPTION_REQUEST, payload: { option, quantidade } })
    let idAcao = option.IdEmpresa
    let data = { idUsuario: 1, quantidade, idAcao }
    $.ajax({
      type: "POST",
      url: BASE_URL + "/Acoes/Comprar",
      data: JSON.stringify(data),
      dataType: "json",
      contentType: "application/json" })
      .done(response => {
        console.log("GOT RESPONSE", response)
        dispatch({ type: BUY_STOCK_OPTION_RESULT, payload: response.ReturnObject })
        dispatch(fetchUserProfile(1))
    })
  }
}
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
    dispatch(fetchCotacao(option.IdEmpresa))
    dispatch(fetchNoticias(option.IdEmpresa))
  }
}

const DEFAULT_STATE = Immutable.fromJS({
  selectedOption: null,
  visibleStockOptions: [],
  newsData: [],
  chart: Immutable.fromJS({
    name: "",
    data: Immutable.fromJS([])
  })
})

const comprarReducer = (state = DEFAULT_STATE, action) => {
  if(state)
    console.log("STATE", state.toJS())
  switch(action.type) {
    case FETCH_COTACAO_REQUEST:
      return state
    case FETCH_COTACAO_RESULT:
      let chart = Immutable.fromJS({
        name: state.get('selectedOption').NomeEmpresa,
        data: Immutable.fromJS(action.payload)
      })
      return state.set("chart", chart)
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
