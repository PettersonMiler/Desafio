import { StackNavigator } from 'react-navigation';

import Home from 'pages/home';
import Locais from 'pages/locais';
import Servicos from 'pages/servicos';

const Routes = StackNavigator(
  {
    Home: { screen: Home },
    Locais: { screen: Locais },
    Servicos: { screen: Servicos },
  },
  {
    initialRouteName: 'Home',
  },
);

export default Routes;
