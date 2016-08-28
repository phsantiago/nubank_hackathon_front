import './Comprar.scss';
import { bindActionCreators } from 'redux'

import { connect } from 'react-redux'
import Comprar from '../../components/Comprar/Comprar'
import { createSelector} from 'reselect'

import { selectStockOption, buyStockOptions, fetchNoticias, fetchEmpresas } from '../../modules/comprar'

const mapStateToProps = createSelector(
  [
  (state) => state.comprar.get("selectedOption"),
  (state) => state.comprar.get("visibleStockOptions"),
  (state) => state.user.get('user').get('SaldoUsuario')],
  (opt, list, userBalance) => {
    return {
      selectedOption: opt,
      visibleStockOptions: list,
      userBalance
    }
  }
)

const mapActionCreators = {
  selectStockOption,
  fetchEmpresas,
  fetchNoticias,
  buyStockOptions
}

export default connect(mapStateToProps, mapActionCreators)(Comprar)
