import React, { Component } from 'react';
import Expo from 'expo';
import { Text, View, Button } from 'react-native';

class LoginScreen extends Component {
  constructor(props) {
    super(props)
      this.state = {
        signedIn: false,
    }
  }
   signInWithGoogle = async () => {
    try {
      const result = await Expo.Google.logInAsync({
        androidClientId: '153199632447-brhq21acs1k8n25hfl9ooa4h7kafi53v.apps.googleusercontent.com',
        //iosClientId: YOUR_CLIENT_ID_HERE,
        scopes: ['profile', 'email'],
      });

      if (result.type === 'success') {
        return result.accessToken;
      } else {
        return {cancelled: true};
      }
    } catch(e) {
      return {error: true};
    }
  }
  render() {
    return (
      <View>
        <Text>Login Screen</Text>

        <Button onPress={this.signInWithGoogle.bind(this)} title="sign in with Google" />
      </View>
    );
  }
}

export default LoginScreen;
