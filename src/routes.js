import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Home from './pages/Home';
import Wallet from './pages/Wallet';
import Pay from './pages/Pay';
import Notifications from './pages/Notification';
import Settings from './pages/Config';
// qual tipo de navegação é
export default () =>
  createAppContainer(
    createStackNavigator(
      {
        Sign: createSwitchNavigator({
          Home,
        }),

        App: createBottomTabNavigator(
          {
            Home,
            Wallet,
            Pay,
            Notifications,
            Settings,
          },

          {
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#FFF',
              inactiveTintColor: '#92929c',

              style: {
                backgroundColor: '#131418',
                borderTopColor: 'rgba(255, 255, 255, 0.2)',
              },
            },
          },
        ),
      },
      {
        initialRouteName: 'App',
        headerMode: 'none',
      },
    ),
  );
