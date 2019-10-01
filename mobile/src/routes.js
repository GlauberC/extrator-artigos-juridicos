import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './pages/Home';
import Artigos from './pages/Artigos';

const StackNavigation = createAppContainer(
  createStackNavigator({
    Home: {
      screen: Home,
      navigationOptions: {
        header: null,
      },
    },
    Artigos: {
      screen: Artigos,
      navigationOptions: {
        title: 'Artigos',
        headerTitleStyle: {
          flex: 1,
          textAlign: 'center',
          fontSize: 28,
          color: '#fff',
          paddingRight: 50,
        },
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#035ade',
        },
      },
    },
  })
);

export default StackNavigation;
