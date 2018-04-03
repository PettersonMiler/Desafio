import { StyleSheet } from 'react-native';
import { metrics, colors } from 'styles';

const styles = StyleSheet.create({
  conteudo: {
    flex: 1,
  },
  lorem: {
    color: colors.padrao,
    fontSize: metrics.font,
    marginHorizontal: metrics.baseMarginHorizontal,
    marginTop: metrics.baseMargin,
  },
  tituloConteiner: {
    flexDirection: 'row',
  },
  boxLogo: {
    flex: 1,
    alignItems: 'flex-end',
    marginHorizontal: metrics.logoMarginHorizontal,
  },
  positionLogo: {
    marginTop: metrics.marginTopLogo,
    backgroundColor: colors.logo,
    borderRadius: metrics.logoRadius,
  },
  logo: {
    width: metrics.widthLogo,
    height: metrics.heightLogo,
  },
  box: {
    marginTop: metrics.baseMargin,
    backgroundColor: colors.item,
  },
  botoes: {
    flexDirection: 'row',
    borderWidth: 2,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderColor: colors.container,
    margin: metrics.baseMargin,
    justifyContent: 'space-around',
  },
  mapView: {
    alignSelf: 'stretch',
    height: 150,
  },
  boxTexto: {
    marginHorizontal: metrics.baseMargin,
    marginBottom: metrics.baseMargin,
  },
  texto: {
    color: colors.padrao,
    fontSize: metrics.fontTitulo,
  },
  boxComent: {
    backgroundColor: colors.item,
  },
  conteudoComent: {
    flexDirection: 'row',
  },
  imagemComent: {
    marginHorizontal: metrics.baseMargin,
    marginTop: metrics.baseMargin,
    borderRadius: 25,
    width: 50,
    height: 50,
  },
  textoComent: {
    flexDirection: 'column',
    marginTop: 10,
  },
  tituloComent: {
    color: colors.padrao,
    fontSize: metrics.fontComent,
  },
  comentario: {
    maxWidth: (metrics.screenWidth) - 75,
  },
  nota: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icone: {
    fontSize: metrics.icone,
    color: colors.padrao,
  },
  iconeTexto: {
    color: colors.padrao,
    fontSize: metrics.iconeTexto,
  },
  rodapeMap: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    backgroundColor: colors.padrao,
  },
  rodapeText: {
    color: colors.item,
  },
  rodapeIcone: {
    marginHorizontal: 5,
    color: colors.padrao,
  },
  positionIcone: {
    marginHorizontal: metrics.rodapeMarginHorizontal,
    backgroundColor: colors.logo,
    borderRadius: metrics.rodapeRadius,
  },
  iconeBotao: {
    color: colors.padrao,
  },
  botaoComent: {
    alignItems: 'center',
    marginBottom: 5,
  },
  textoBotao: {
    color: colors.padrao,
  },
});

export default styles;
