import React, { Component } from 'react';
import { View, Text } from 'react-native';

import HeaderLocal from './components/HeaderLocal';

export default class Locais extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: <HeaderLocal lista={navigation.state.params} />,
  });

  render() {
    return (
      <View>
        <Text>OI LOCAL</Text>
      </View>
    );
  }
}
