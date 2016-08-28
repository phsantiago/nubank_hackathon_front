import { connect } from 'react-redux'
import { createSelector} from 'reselect'
import React from 'react'
import { Row, Col } from 'react-materialize'
import { fetchUserProfile } from '../modules/user'

const mapStateToProps = createSelector(
  (state) => {
    return state.user.get('user') },
  (user) => {
    return { user: user.toJS() }
  }
)

const mapActionCreators = {
  fetchUserProfile
}

class UserHeader extends React.Component {

  componentDidMount() {
    this.props.fetchUserProfile(1)
  }

  render() {
    let { user } = this.props
    let { UrlImagemUsuario, NomeUsuario, SaldoUsuario, DescontoAcumuladoUsuario } = user
    return (
        <Row>
          <img className="circle" src={UrlImagemUsuario} />
          <span>{NomeUsuario}</span>

          Saldo: { SaldoUsuario }
          Desconto Acumulado: { DescontoAcumuladoUsuario }
        </Row>
    )
  }
}

export default connect(mapStateToProps, mapActionCreators)(UserHeader)
