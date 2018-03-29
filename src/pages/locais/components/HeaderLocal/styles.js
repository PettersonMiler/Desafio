import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  conteiner: {
    margin: 10,
    flexDirection: 'row',
    backgroundColor: colors.padrao,
  },
  titulo: {
    color: colors.item,
    fontSize: metrics.fontTitulo,
  },
  icone: {
    marginHorizontal: 5,
    color: colors.item,
  },
  caixa: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

export default styles;
