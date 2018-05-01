import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';
import Family from './components/scenes/Family.js'
export default class Ellis extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('ellis2.jpg')}/>
        <Family/>
      </View>
    );
  }
};

AppRegistry.registerComponent('Ellis', () => Ellis);
