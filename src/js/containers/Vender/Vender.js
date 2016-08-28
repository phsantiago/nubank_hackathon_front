import './Vender.scss';

import { connect } from 'react-redux'
import Vender from '../../components/Vender/Vender'
import { createSelector} from 'reselect'
import { fetchAcoes } from '../../modules/vender'

const mapStateToProps = createSelector(
  [(state) => {
    return state.vender.get('availableOptions')
  }],
  (opts) => ({
    availableOptions: opts.toJS()
  })
)

const mapActionCreators = {
  fetchAcoes
}

export default connect(mapStateToProps, mapActionCreators)(Vender)
