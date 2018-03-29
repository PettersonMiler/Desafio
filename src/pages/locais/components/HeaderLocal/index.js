import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const HeaderLocal = navigation => (
  <View style={styles.conteiner}>
    <Icon name="map-marker" size={20} style={styles.icone} />
    <Text style={styles.titulo}>{navigation.lista.cidade} - {navigation.lista.bairro}</Text>
    <View style={styles.caixa}>
      <Icon name="search" size={20} style={styles.icone} />
    </View>
  </View>
);

export default HeaderLocal;
