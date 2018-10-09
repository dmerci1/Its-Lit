import React, { Component } from 'react';
import { Image, Text } from 'react-native';
import { Container, Header, List, ListItem, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Right, Body } from 'native-base';

class BarDetails extends Component {
  constructor(props) {
  super(props);

  this.onRowPress = this.onRowPress.bind(this);
}

onRowPress() {
  const { bar, navigation } = this.props;
  navigation.navigate('settings', { bar });
}

  Hello() {
    console.log('hello')
  }
  showBars() {
    console.log('Yayyy');
  }

  render() {
    const { bar } = this.props;
    const { name, location, phone, image, distance } = bar;
    if ({ distance } >= 0.5)  {
    bars.sort();
    bars.pop();
  }
    return (
      <Container>
              <Content>
                <List>
                  <ListItem>
                    <Text>{ name }</Text>
                  </ListItem>
                  <ListItem>
                      <Image style={{ height: 300, width: null, flex: 1 }} source={{ uri: image }} />
                      </ListItem>
                  <ListItem>
                    <Text>{ location }</Text>
                  </ListItem>
                  <ListItem>
                    <Text>{ phone }</Text>
                  </ListItem>
                  <ListItem>
                    <Text>{ distance / 1609.344 } miles away</Text>
                  </ListItem>
                </List>
              </Content>
            </Container>

    );
  }
}


export default BarDetails;
