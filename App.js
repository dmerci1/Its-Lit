import React, { Component } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { Location, Permissions } from 'expo';
import firebase from 'firebase';
import Navigator from './components/Navigator';
import MapScreen from './components/MapScreen';
import LoginScreen from './components/LoginScreen';

class App extends Component {
  state = { loggedIn: null }

  componentWillMount() {
    const config = {
    apiKey: "AIzaSyCeOZRgbtjPmvkOslGbGXDTJMUpWTlfJEE",
    authDomain: "its-lit-47d1a.firebaseapp.com",
    databaseURL: "https://its-lit-47d1a.firebaseio.com",
    projectId: "its-lit-47d1a",
    storageBucket: "its-lit-47d1a.appspot.com",
    messagingSenderId: "300038339200"
  };
  firebase.initializeApp(config);
  }
  render() {
    return (
      <Navigator />
    );
  }
}

export default App;
