import { combineReducers } from 'redux';
import comprar from '../modules/comprar';
import vender from '../modules/vender';

const rootReducer = combineReducers({
  comprar,
  vender
});

export default rootReducer;
