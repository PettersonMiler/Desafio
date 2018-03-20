import { StackNavigator } from 'react-navigation';

import Home from 'pages/home';
import Locais from 'pages/locais';

const Routes = StackNavigator(
  {
    Home: { screen: Home },
    Locais: { screen: Locais },
  },
  {
    initialRouteName: 'Home',
  },
);

export default Routes;
