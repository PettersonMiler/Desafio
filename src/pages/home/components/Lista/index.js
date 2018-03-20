import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { withNavigation } from 'react-navigation';

const Lista = ({ lista, navigation }) => (

  <View style={styles.container}>
    <TouchableOpacity
      style={styles.botao}
      onPress={() =>
        navigation.navigate('Locais', lista)
      }
    >
      <View style={styles.containerInfo}>
        <Text style={styles.texto}>{lista.bairro} - {lista.cidade}</Text>
      </View>
    </TouchableOpacity>
  </View>
);

Lista.propTypes = {
  lista: PropTypes.shape({
    cidade: PropTypes.string,
    bairro: PropTypes.string,
  }).isRequired,
};

export default withNavigation(Lista);
