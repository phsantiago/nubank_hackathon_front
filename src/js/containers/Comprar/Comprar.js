import './Comprar.scss';
import { bindActionCreators } from 'redux'

import { connect } from 'react-redux'
import Comprar from '../../components/Comprar/Comprar'
import { createSelector} from 'reselect'

import { selectStockOption } from '../../modules/comprar'

const mapStateToProps = createSelector(
  (state) => state.comprar,
  (comprar) => comprar.toJS()
)

const mapActionCreators = {
  selectStockOption
}

console.log("ACTION EH", selectStockOption, mapActionCreators)
export default connect(mapStateToProps, mapActionCreators)(Comprar)
