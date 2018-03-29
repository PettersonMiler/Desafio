import React from 'react';

import { TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const Favoritos = () => (
  <TouchableOpacity
    onPress={() => null}
    style={styles.botao}
  >
    <Icon name="star" size={20} style={styles.icone} />
    <Text style={styles.texto} >Favoritos</Text>
  </TouchableOpacity>
);

export default Favoritos;
