import React from 'react';

import { TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { metrics } from 'styles';
import styles from './styles';

const Comentarios = ({scroll}) => (
  <TouchableOpacity
    onPress={scroll.scrollTo({ y: metrics.screenWidth / 2 })}
    style={styles.botao}
  >
    <Icon name="ios-chatbubbles" size={20} style={styles.icone} />
    <Text style={styles.texto} >Comentarios</Text>
  </TouchableOpacity>
);

 /*<TouchableOpacity
              onPress={this.scroll.bind(this)}
              style={styles.botaoComent}
            >
              <Icon name="comments-o" size={20} style={styles.iconeBotao} />
              <Text style={styles.textoBotao} >Comentarios</Text>
            </TouchableOpacity>*/

export default Comentarios;
