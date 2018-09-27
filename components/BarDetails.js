import React from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Right, Body } from 'native-base';

const BarDetails = ({ bar }) => {
  const { name, location, phone, image } = bar;
    return (
      <Container>
        <Content>
          <Card>
            <CardItem Header bordered>
              <Left />
              <Body>
                <Text>{ name }</Text>
              </Body>
              <Right />
            </CardItem>
            <CardItem bordered >
              <Image style={{ height: 300, width: null, flex: 1 }} source={{ uri: image }} />
            </CardItem>
            <CardItem bordered>
              <Left>
                <Text>{ location }</Text>
              </Left>
              <Right>
                <Text>{ phone }</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  };


export default BarDetails;
