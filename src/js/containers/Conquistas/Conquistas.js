import './Conquistas.scss';
import { bindActionCreators } from 'redux'

import { connect } from 'react-redux'
import Conquistas from '../../components/Conquistas/Conquistas'
import { createSelector} from 'reselect'

import { selectStockOption, fetchNoticias, fetchEmpresas } from '../../modules/conquistas'

const mapStateToProps = createSelector(
  
  (opt, list) => {
    return {
      selectedOption: opt,
      visibleStockOptions: list
    }
  }
)


export default connect(mapStateToProps)(Conquistas)
