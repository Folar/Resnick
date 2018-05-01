import React from 'react';
import {
  Text,
  View,
  asset,
  Pano
} from 'react-vr';

import FamilyLayout from './layouts/FamilyLayout.js';

//Scene
class Family extends React.Component {
  render() {
    return (
      <View>
       
        <FamilyLayout />
      </View>
    )
  }
}

module.exports = Family;
