import React, { Component } from 'react';
import Expo from "expo";

import {
  Text,
} from 'react-native';

import {Content} from 'native-base';

export default class Sidebar extends Component {



  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
  }
  render() {
    return (
          <Content style={{backgroundColor:'#FFFFFF'}}>
            <Text>Drawer</Text>
          </Content>
    );
  }
}

module.exports = Sidebar;
