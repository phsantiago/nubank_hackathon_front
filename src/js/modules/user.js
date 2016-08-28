import Immutable from 'immutable'
var $ = require('jquery')

export const FETCH_USER_PROFILE_REQUEST = "FETCH_USER_PROFILE_REQUEST"

export const FETCH_USER_PROFILE_RESULT = "FETCH_USER_PROFILE_RESULT"

export const BASE_URL = "http://simuladoracoes.hackathon.com.br"

export const fetchUserProfile = (userId=1) => {
  return (dispatch) => {
      dispatch({ type: FETCH_USER_PROFILE_REQUEST, payload: { userId } })
      $.getJSON(BASE_URL + "/Usuario/Me/" + userId)
        .done((response) => {
          console.log("GOT RESPONSE", response)
          dispatch({ type: FETCH_USER_PROFILE_RESULT, payload: response.ReturnObject })
        })
  }
}

const DEFAULT_STATE = Immutable.fromJS({
  user: Immutable.fromJS({})
})

const userReducer = (state = DEFAULT_STATE, action) => {
  console.log("GOT INITIAL RESULT", state)
  switch(action.type) {
    case FETCH_USER_PROFILE_REQUEST:
      return state
    case FETCH_USER_PROFILE_RESULT:
      return state.set('user', Immutable.fromJS(action.payload))
    default:
      return state
  }
}

export default userReducer
