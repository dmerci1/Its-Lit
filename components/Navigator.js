import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import LoginScreen from './LoginScreen';
import MapScreen from './MapScreen';
import SavedBarsScreen from './SavedBarsScreen';
import SettingsScreen from './SettingsScreen';

 const Navigator = createBottomTabNavigator({
  // login: { screen: LoginScreen },
  bars: { screen: SavedBarsScreen},
  map: { screen: MapScreen },
  settings: { screen: SettingsScreen }
});

export default Navigator;
