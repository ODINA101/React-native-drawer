
import React, { Component } from 'react';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import {
  Text,
} from 'react-native';

import {Header,Left,Button,Icon,Right,Body,Title} from 'native-base';

export default class AppHeader extends Component {
 
  render() {
    return (
      <Header style={{ paddingTop: getStatusBarHeight(),
        height: 54 + getStatusBarHeight(),
    }}>
       <Left>
       <Button transparent
              onPress={()=>this.props.openDrawer()}
       >
         <Icon name='menu' />
       </Button>
       </Left>
       <Body>
         <Title>SDCC Wallet</Title>
       </Body>
       
     </Header>
    );
  }
}

module.exports = AppHeader;