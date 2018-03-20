import React from 'react';
import { View, Text } from 'react-native';

const HeaderLocal = navigation => (
  <View>
    <Text>{navigation.lista.bairro}</Text>
  </View>
);

export default HeaderLocal;
