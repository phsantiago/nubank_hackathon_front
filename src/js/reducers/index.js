import { combineReducers } from 'redux';
import comprar from '../modules/comprar';
import vender from '../modules/vender';
import user from '../modules/user';

const rootReducer = combineReducers({
  user,
  comprar,
  vender
});

export default rootReducer;
