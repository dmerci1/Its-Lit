import React, { Component } from 'react';
import firebase from 'firebase';
import { Text } from 'react-native';
import { Container, Footer, FooterTab, Header, Content, Button, Left, Right, Body, Icon} from 'native-base';

class SettingsScreen extends Component {
  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: '#ff0000', height: 70 }}>
          <Left />
          <Body>
            <Text style={{ color: 'white', left: 80, fontSize: 30 }}>Settings</Text>
          </Body>
          <Right />
        </Header>
        <Content>
          <Button
            block
            danger
            onPress={() => firebase.auth().signOut()}
          >
              <Text>Log Out</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default SettingsScreen;
