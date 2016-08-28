import React, { Component, PropTypes } from 'react';
import {Row, Col, Card, CardTitle, Navbar, NavItem} from 'react-materialize';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render() {
    return (
      <div>
        <Navbar>
          <NavItem href="comprar">Comprar</NavItem>
          <NavItem href="vender">Vender</NavItem>
        </Navbar>
        {this.props.children}
      </div>
    );
  }
}
