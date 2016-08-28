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

//ddk<div className="efeitoSaldo sub">-123.12</div>
class UserHeader extends React.Component {

  componentDidMount() {
    this.props.fetchUserProfile(1)
  }

  render() {
    let { user } = this.props
    let { UrlImagemUsuario, NomeUsuario, SaldoUsuario, DescontoAcumuladoUsuario } = user
    return (
        <Row className="valign-wrapper main-header pink darken-3">
          <Col s={1}>
            <img className="circle picture" src={UrlImagemUsuario} />
          </Col>
          <Col s={3} className="white-text">
            <h5>{NomeUsuario}</h5>
          </Col>
          <Col s={4} className="tac white-text">
            <div className="sep-saldo">
              <h3>Saldo R$: </h3>
            </div>
            <div className="sep-saldo">
              <h3>{ SaldoUsuario }</h3>
            </div>
          </Col>
          <Col s={4} className="tac white-text">
            <h3>Desconto R$: { DescontoAcumuladoUsuario }</h3>
          </Col>
        </Row>
    )
  }
}

export default connect(mapStateToProps, mapActionCreators)(UserHeader)
