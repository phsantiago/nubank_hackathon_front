import React, { Component, PropTypes } from 'react';
import {Row, Col, Card, CardTitle, Navbar, NavItem} from 'react-materialize';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render() {
    return (
      <Row>
        <Navbar>
          <NavItem>XXX</NavItem>
        </Navbar>
        {this.props.children}
      </Row>
    );
  }
}
