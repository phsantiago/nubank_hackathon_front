import './Comprar.scss';

import { connect } from 'react-redux'
import Comprar from '../components/Comprar/Comprar'
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

export default connect(mapStateToProps, mapActionCreators)(Comprar)
