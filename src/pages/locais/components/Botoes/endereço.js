import React from 'react';

import { TouchableOpacity, Text, Alert } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const Endereco = ({ dados }) => (
  <TouchableOpacity
    onPress={() => {
      Alert.alert(
        'Endereço',
        dados.endereco,
      );
    }}
    style={styles.botao}
  >
    <Icon name="map-marker" size={20} style={styles.icone} />
    <Text style={styles.texto} >Endereço</Text>
  </TouchableOpacity>

);

Endereco.propTypes = {
  dados: PropTypes.shape({
    endereco: PropTypes.string,
  }).isRequired,
};

export default Endereco;
