import React, { Component } from 'react';
import firebase from 'firebase';
import { Text, View } from 'react-native';
import { Container, Content, Form, Item, Label, Input, Spinner, Button, Card } from 'native-base';

class LoginScreen extends Component {
  state = { email: '', password: '', error: '', loading: false };

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
  }

  onLoginFail() {
    this.setState({ error: 'Failed to Log In', loading: false });
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner color='red' />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)} >
        <Text>Log In</Text>
      </Button>
    );
  }
  render() {
    return (
      <Container>
        <Content>
          <Card>
            <Item fixedLabel>
              <Label>E-Mail</Label>
              <Input
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
              />
            </Item>
            <Item fixedLabel>
              <Label>Password</Label>
              <Input
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
              />
            </Item>
            <Text style={{ fontSize: 20, alignSelf: 'center', color: 'red' }}>
              { this.state.error }
            </Text>
              {this.renderButton()}
          </Card>
        </Content>
      </Container>
    );
  }
}

export default LoginScreen;
