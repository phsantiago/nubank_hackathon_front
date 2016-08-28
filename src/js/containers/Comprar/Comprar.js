import './Comprar.scss';
import { bindActionCreators } from 'redux'

import { connect } from 'react-redux'
import Comprar from '../../components/Comprar/Comprar'
import { createSelector} from 'reselect'

import { selectStockOption, fetchNoticias, fetchEmpresas } from '../../modules/comprar'

const mapStateToProps = createSelector(
  [
  (state) => state.comprar.get("selectedOption"),
  (state) => state.comprar.get("visibleStockOptions")],
  (opt, list) => {
    return {
      selectedOption: opt,
      visibleStockOptions: list
    }
  }
)

const mapActionCreators = {
  selectStockOption,
  fetchEmpresas,
  fetchNoticias
}

console.log("ACTION EH", selectStockOption, mapActionCreators)
export default connect(mapStateToProps, mapActionCreators)(Comprar)
