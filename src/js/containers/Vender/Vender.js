import './Vender.scss';

import { connect } from 'react-redux'
import Vender from '../../components/Vender/Vender'
import { createSelector} from 'reselect'
import { fetchAcoes, setOptionQty } from '../../modules/vender'

const mapStateToProps = createSelector(
  [(state) => {
    return state.vender.get('availableOptions')
  }],
  (opts) => ({
    availableOptions: opts.toJS()
  })
)

const mapActionCreators = {
  fetchAcoes,
  incrementQty: function(option) {
    console.log("INC", option)
    return setOptionQty(option.EmpresaId, option.QuantidadeEmEstoque - 1, option.QuantidadeASerVendida + 1)
  },
  decrementQty: function(option) {
    return setOptionQty(option.EmpresaId, optons.QuantidadeEmEstoque + 1, option.QuantidadeASerVendida - 1)
  }
}

export default connect(mapStateToProps, mapActionCreators)(Vender)
