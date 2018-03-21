import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default {
  basePadding: 10,
  baseMarginTop: 20,
  baseMarginHorizontal: 20,
  baseRadius: 3,
  elevacao: 2,
  font: 20,
  imagem: 25,
  fontTitulo: 15,
  fontLorem: 30,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
};
