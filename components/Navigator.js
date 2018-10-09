import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { Icon } from 'native-base';
import LoadingScreen from './LoadingScreen';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import MapScreen from './MapScreen';
import SavedBarsScreen from './SavedBarsScreen';
import SettingsScreen from './SettingsScreen';
import BarListScreen from './BarListScreen';
import ViewBarScreen from './ViewBarScreen';

const AuthNav = createBottomTabNavigator({
  login: { screen: LoginScreen },
  register: { screen: RegisterScreen }
});

const HomeNav = createBottomTabNavigator({
 bars: SavedBarsScreen,
 map: MapScreen,
 settings: SettingsScreen,
},
{
  tabBarOptions: {
    style: {
      backgroundColor: '#ff0000',
    },
    labelStyle: {
      fontSize: 25,
      color: 'white',
    }
  },
}
);
 //view: { screen: ViewBarScreen }



 const Navigator = createBottomTabNavigator({
  loading: { screen: LoadingScreen,
    navigationOptions: {
      tabBarVisible: false
      }
    },
  auth: { screen: AuthNav,
    navigationOptions: {
      tabBarVisible: false
    }
  },
  home: { screen: HomeNav,
    navigationOptions: {
      tabBarVisible: false
      }
    },
    list: { screen: BarListScreen,
      navigationOptions: {
        tabBarVisible: false
        }
       },
});

export default Navigator;
