import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default {
  basePadding: 10,
  baseMargin: 10,
  baseMarginTop: 20,
  baseMarginHorizontal: 20,
  baseRadius: 3,
  elevacao: 2,
  font: 20,
  imagem: 25,
  fontTitulo: 15,
  fontComent: 10,
  marginBottomBotao: 5,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  icone: 20,
  iconeTexto: 10,
  marginTopLogo: -50,
  logoRadius: 40,
  widthLogo: 80,
  heightLogo: 80,
  logoMarginHorizontal: 30,
  rodapeMarginHorizontal: 5,
  rodapeRadius: 10,
};
