import './FriendListApp.scss';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as FriendsActions from '../../actions/FriendsActions';
import { AddFriendInput, FriendList } from '../../components';

import {Row, Col, Card, CardTitle, Navbar, NavItem} from 'react-materialize';

class FriendListApp extends Component {

  render () {
    return (
      <Row>

        <Col s={6}>
        <Card
          header={ <CardTitle>HELLO</CardTitle> }
          actions={[<a href='#'>This is a link</a>]}
          >
           HELLO WORLD
           Some content
        </Card>
        </Col>

      </Row>
    );
  }
}

function mapStateToProps(state) {
  return {
    friendList: state.friendList
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(FriendsActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendListApp);
