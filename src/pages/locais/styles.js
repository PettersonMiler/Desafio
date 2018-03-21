import { StyleSheet } from 'react-native';
import { metrics, colors } from 'styles';

const styles = StyleSheet.create({
  conteudo: {
    flex: 1,
  },
  lorem: {
    color: colors.padrao,
    fontSize: metrics.fontLorem,
    marginHorizontal: metrics.baseMarginHorizontal,
    marginTop: metrics.basePadding,
  },
  box: {
    width: metrics.screenWidth,
    backgroundColor: colors.item,
    flexDirection: 'row',
  },
});

export default styles;
