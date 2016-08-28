import Immutable from 'immutable'

export const SELECT_STOCK_OPTION = "SELECT_STOCK_OPTION"

export const selectStockOption = (option) => {
  console.log("OPTION", option)
  return {
    type: SELECT_STOCK_OPTION,
    payload: option
  }
}

const DEFAULT_STATE = Immutable.fromJS({
  selectedOption: {},
  visibleStockOptions: [
{ details: { Abertura: "19.13", MaiorValorDia: "12.32", MenorValorDia: "12.123", MaiorMeses: "123.2", MenorMeses: "123.12", ValorDeAbertura: "12" } }
    ],
  newsData: [
    { img_url: null, title: "O CEO DO MACDONALD MORREU", content: "LOREM IPSUM", source_url: "http://google.com" },
    { img_url: null, title: "O CEO DO MACDONALD MORREU", content: "LOREM IPSUM", source_url: "http://google.com" },
    { img_url: null, title: "O CEO DO MACDONALD MORREU", content: "LOREM IPSUM", source_url: "http://google.com" },
    { img_url: null, title: "O CEO DO MACDONALD MORREU", content: "LOREM IPSUM", source_url: "http://google.com" },
    { img_url: null, title: "O CEO DO MACDONALD MORREU", content: "LOREM IPSUM", source_url: "http://google.com" },
    { img_url: null, title: "O CEO DO MACDONALD MORREU", content: "LOREM IPSUM", source_url: "http://google.com" },
  ]
})

const comprarReducer = (state = DEFAULT_STATE, action) => {
  if(state)
    console.log("STATE", state.toJS())
  switch(action.type) {
    case SELECT_STOCK_OPTION:
      return state.set('selectedOption', action.payload)
    default:
      return state
  }
}

export default comprarReducer
