import React, { Component, PropTypes } from 'react';
import {Row, Col, Card, CardTitle, Navbar, NavItem} from 'react-materialize';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render() {
    return (
      <div> 
        <Navbar className="pink darken-4">
          <Row>
            <Col s={11}>
              <NavItem href="comprar">Comprar</NavItem>
              <NavItem href="vender">Vender</NavItem>
              <NavItem href="conquistas">Conquistas</NavItem>
            </Col>
            <Col s={1}>
              <NavItem href="#" className="notification-ic">
                <i className="small material-icons">add_alert</i>
              </NavItem>
              <Card className="notifications">
                <div className="pin"></div>
                <h2>Notificações</h2>
              </Card>
            </Col>
          </Row>
        </Navbar>
        {this.props.children}
      </div>
    );
  }
}
