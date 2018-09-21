import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import LoadingScreen from './LoadingScreen';
import LoginScreen from './LoginScreen';
import MapScreen from './MapScreen';
import SavedBarsScreen from './SavedBarsScreen';
import SettingsScreen from './SettingsScreen';

const AuthNav = createBottomTabNavigator({
  login: { screen: LoginScreen,
    navigationOptions: {
      tabBarVisible: false
      }
    }
});

const HomeNav = createBottomTabNavigator({
 bars: { screen: SavedBarsScreen },
 map: { screen: MapScreen },
 settings: { screen: SettingsScreen }
});

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
    }
});

export default Navigator;
