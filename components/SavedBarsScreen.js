import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { Text } from 'react-native';
import { Container, Content, Body, Header, Form, Item, ListItem, CheckBox, Label, Input, Button, Left, Picker } from 'native-base';
import { barUpdate, barCreate } from '../actions';

class SavedBarsScreen extends Component {

  onButtonPress() {
    const { name, breed, gender, age, bio, phone } = this.props;

    const navigationProps = this.props.navigation;

    this.props.barCreate({ name, breed, gender, age, bio, phone, navigationProps });
}
  render() {


    return (
      <Container>
      <Header style={{ height: 80 }}>
        <Left>
          <Button
          block

          >
            <Text>Back to Dog List</Text>
          </Button>
        </Left>
      </Header>
        <Content>
          <Form>
            <Item stackedLabel>
              <Label>Name</Label>
                <Input
                value={this.props.name}
                onChangeText={value => this.props.barUpdate({ prop: 'name', value })}
                />
              </Item>

                    </Form>
                    <Button
                     block info
                     onPress={this.onButtonPress.bind(this)}
                     >
                       <Text>Add Bar</Text>
                     </Button>
                  </Content>
                </Container>

    );
  }
}

const mapStateToProps = (state) => {
  const { name, breed, gender, age, bio, phone } = state.dogForm;

  return { name, breed, gender, age, bio, phone };
};

export default connect(mapStateToProps, { barUpdate, barCreate })(SavedBarsScreen);
