import React from 'react';
import { Text, View, Modal } from 'react-native';
import { Container, Header, Title, Content, Button, Left, Right, Body, Icon, Card, CardItem } from 'native-base';

const BarListModal = () => {
    return (
      <Content>
        <Card>
          <CardItem>
            <Button
            block
            danger
            >
              <Text>View List of Bars</Text>
            </Button>
          </CardItem>
          <CardItem>
            <Button
            block
            info
            >
              <Text>View List of Bars</Text>
            </Button>
          </CardItem>
        </Card>
      </Content>
    );
  };


export { BarListModal };
