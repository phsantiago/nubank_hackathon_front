export const SELECT_STOCK_OPTION = "SELECT_STOCK_OPTION"

export const selectStockOption = (option) = ({
  type: SELECT_STOCK_OPTION,
  payload: option
})


const DEFAULT_STATE = {
}

const autocompleteReducer = (state = DEFAULT_STATE, action) => {
  switch(action.type) {
    case SELECT_STOCK_OPTION:
      return state
    default:
      return state
  }
}

export default comprarReducer

