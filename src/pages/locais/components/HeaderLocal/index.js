import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const HeaderLocal = navigation => (
  <View>
    <Text style={styles.titulo}>{navigation.lista.cidade} - {navigation.lista.bairro}</Text>
  </View>
);

export default HeaderLocal;
