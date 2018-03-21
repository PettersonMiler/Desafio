import { Component } from 'react';
import { colors } from 'styles';

export default class Servicos extends Component {
  static navigationOptions = () => ({
    headerTitle: 'Serviços',
    headerStyle: {
      backgroundColor: colors.padrao,
    },
    headerTintColor: colors.item,
  });

  render() {
    return null;
  }
}
