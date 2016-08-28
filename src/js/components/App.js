import React, { Component, PropTypes } from 'react';
import {Row, Col, Card, CardTitle, Navbar, NavItem} from 'react-materialize';
import UserHeader from '../containers/UserHeader'

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  constructor(props) {
    super(props)
    this.state = { isNotificationVisible: false }
  }

  toggleNotification() {
    let { isNotificationVisible } = this.state
    this.setState({ isNotificationVisible: !isNotificationVisible })
  }

  render() {
    let { isNotificationVisible } = this.state
    let _toggleNotification = this.toggleNotification.bind(this)

    return (
      <div>
        <UserHeader />
        <Navbar className="pink darken-4">
          <Row>
            <Col s={11}>
              <NavItem href="comprar">Comprar</NavItem>
              <NavItem href="vender">Vender</NavItem>
              <NavItem href="conquistas">Conquistas</NavItem>
            </Col>

            <Col s={1}>

              <NavItem
                onClick={ _toggleNotification }
                className="notification-ic">
                <i className="small material-icons">add_alert</i>
              </NavItem>

              { isNotificationVisible?
                <Card className="notifications">
                  <div className="pin"></div>
                  <h2>Notificações</h2>
                </Card> : null }
            </Col>
          </Row>
        </Navbar>
        {this.props.children}
      </div>
    );
  }
}
