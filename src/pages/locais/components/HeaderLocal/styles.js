import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.padrao,
  },
  titulo: {
    color: colors.item,
    fontSize: metrics.fontTitulo,
  },

});

export default styles;
