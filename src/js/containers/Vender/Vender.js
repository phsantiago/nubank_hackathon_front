import './Vender.scss';

import { connect } from 'react-redux'
import Vender from '../../components/Vender/Vender'
import { createSelector} from 'reselect'

/*import { fetchFilteredAdvertList, changeLayout } from '../modules/advert_list'
import { hideFilter, showFilter } from '../modules/filter'*/

const mapStateToProps = createSelector(
  [ ],
  () => ({
  })
)

const mapActionCreators = {
}

export default connect(mapStateToProps, mapActionCreators)(Vender)
