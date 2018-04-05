import React, { Component } from 'react';
import {
  AppRegistry,
  Text
} from 'react-native';
import Expo from "expo";

import {Drawer, View} from 'native-base';
import AppHeader from './components/AppHeader';
import AppBody from './components/appBody';

import Sidebar from './components/sidebar';

export default class App extends Component {

  constructor(props) {
super(props)
  this.state = {
    loading:true
  }

  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });


    this.setState({ loading: false });
  }

  closeDrawer = () => {
    this.drawer._root.close()
  };
  openDrawer = () => {
    this.drawer._root.open()
  };





  render() {

if(!this.state.loading) {
  return (
    <Drawer
      ref={(ref) => { this.drawer = ref; }}
      content={<Sidebar/>}
      onClose={() => this.closeDrawer()} >

      <AppHeader
          openDrawer={this.openDrawer.bind(this)}
      />
      <AppBody/>
      </Drawer>
);

  }else{
    return (<View></View>);
  }
  


  }
}

module.exports = App;