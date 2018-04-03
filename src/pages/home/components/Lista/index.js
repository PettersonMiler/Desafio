import React from 'react';
import { withNavigation } from 'react-navigation';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const Lista = ({ lista, navigation }) => (

  <View style={styles.container}>
    <TouchableOpacity
      style={styles.botao}
      onPress={() =>
        navigation.navigate('Locais', lista)
      }
    >
      <View style={styles.containerInfo}>
        <Text style={styles.texto}>{lista.cidade} - {lista.bairro}</Text>
      </View>
    </TouchableOpacity>
  </View>
);

Lista.propTypes = {
  lista: PropTypes.shape({
    cidade: PropTypes.string,
    bairro: PropTypes.string,
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default withNavigation(Lista);
