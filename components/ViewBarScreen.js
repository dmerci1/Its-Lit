import React, { Component } from 'react';
import { Text } from 'react-native';
import { Container, Footer, FooterTab, Header, Content, Button, Left, Right, Body, Icon} from 'native-base';

class ViewBarScreen extends Component {
  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: '#ff0000', height: 70 }}>
          <Left />
          <Body>
            <Text style={{ color: 'white', left: 80, fontSize: 30 }}>View Bar Screen</Text>
          </Body>
          <Right />
        </Header>
        <Content>
          <Text>View Bar</Text>
        </Content>
      </Container>
    );
  }
}

export default ViewBarScreen;
