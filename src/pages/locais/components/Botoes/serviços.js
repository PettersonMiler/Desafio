import React from 'react';
import { withNavigation } from 'react-navigation';
import { TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const Servicos = ({ navigation }) => (
  <TouchableOpacity
    onPress={() => { navigation.navigate('Servicos'); }}
    style={styles.botao}
  >
    <Icon name="diamond" size={20} style={styles.icone} />
    <Text style={styles.texto} >Serviços</Text>
  </TouchableOpacity>
);

export default withNavigation(Servicos);
