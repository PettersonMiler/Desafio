import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  botao: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.item,
    padding: metrics.basePadding,
    marginTop: metrics.baseMarginTop,
    marginHorizontal: metrics.baseMarginHorizontal,
    borderRadius: metrics.baseRadius,
    elevation: metrics.elevacao,
  },
  containerInfo: {
    marginHorizontal: metrics.baseMarginHorizontal,
  },
  texto: {
    textAlign: 'center',
    color: colors.padrao,
    fontSize: metrics.font,
    fontWeight: 'bold',
  },
});

export default styles;
