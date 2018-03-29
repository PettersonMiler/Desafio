import React from 'react';

import { TouchableOpacity, Linking, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

const Ligar = dados => (
  <TouchableOpacity
    onPress={() => Linking.openURL(`tel:${String(dados.telefone)}`)}
    style={styles.botao}
  >
    <Icon name="ios-call" size={20} style={styles.icone} />
    <Text style={styles.texto} >Ligar</Text>
  </TouchableOpacity >
);

export default Ligar;
