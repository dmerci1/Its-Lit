import React from 'react';
import { View } from 'react-native';
import Navigator from './components/Navigator';
import LoginScreen from './components/LoginScreen';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <LoginScreen />
      </View>
    );
  }
}
