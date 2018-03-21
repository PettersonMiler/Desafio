import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  Linking
} from 'react-native';
import { colors, metrics } from 'styles';
import styles from './styles';
import HeaderLocal from './components/HeaderLocal';

export default class Locais extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: <HeaderLocal lista={navigation.state.params} />,
    headerStyle: {
      backgroundColor: colors.padrao,
    },
    headerTintColor: colors.item,
  });

  endereco = (dados) => {
    Alert.alert(
      'Endereço',
      dados.endereco,
    );
  }

  render() {
    const dados = this.props.navigation.state.params;
    console.tron.log(this.props.navigation);
    return (
      <View>
        <Image
          source={{
            uri: dados.urlFoto,
            width: metrics.screenWidth,
            height: (metrics.screenHeight - 200) / 2,
          }}
        />
        <Text style={styles.lorem}>LOREM</Text>
        <View style={styles.box}>
          <TouchableOpacity
            onPress={() => Linking.openURL(`tel:${String(dados.telefone)}`)}
          >
            <Text>LIGAR</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate('Servicos')
            }
          >
            <Text>Serviços</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.endereco(dados)}
          >
            <Text>Endereço</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => null}
          >
            <Text>Comentarios</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => null}
          >
            <Text>Favoritos</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
