import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Container, Header, Content, Button, Left, Right, Body, Icon} from 'native-base';

class SavedBarsScreen extends Component {
  render() {
    return(
      <Container>
        <Header style={{ backgroundColor: '#ff0000', height: 70 }}>
          <Left />
          <Body>
            <Text style={{ color: 'white', left: 80, fontSize: 30 }}>Saved Bars</Text>
          </Body>
          <Right />
        </Header>
      </Container>
    );
  }
}

export default SavedBarsScreen;
