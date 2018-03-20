import React from 'react';
import { View, Text } from 'react-native';
import styles from 'styles';

const Lista = item => (
  <View style={styles.container}>
    <Text >{item.lista}</Text>
  </View>
);

export default Lista;
