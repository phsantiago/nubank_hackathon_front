import './Comprar.scss';

import { connect } from 'react-redux'
import Comprar from '../../components/Comprar/Comprar'
import { createSelector} from 'reselect'

import { selectStockOption } from '../../modules/comprar'

const mapStateToProps = createSelector(
  [ ],
  () => ({
  })
)

const mapActionCreators = {
  selectStockOption
}

export default connect(mapStateToProps, mapActionCreators)(Comprar)
