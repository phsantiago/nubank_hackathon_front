import './Vender.scss';

import { connect } from 'react-redux'
import Vender from '../../components/Vender/Vender'
import { createSelector} from 'reselect'

const mapStateToProps = createSelector(
  [ ],
  () => ({
  })
)

const mapActionCreators = {
}

console.log("IN VNDER")
export default connect(mapStateToProps, mapActionCreators)(Vender)
