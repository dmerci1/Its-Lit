import React, { Component } from 'react';
import { Text } from 'react-native';
import { Container, Content, Form, Card, Button, Item, Input, Label, List, ListItem, Picker } from 'native-base';
import { connect } from 'react-redux';
import { dogUpdate } from '../actions';

class DogForm extends Component  {
  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item stackedLabel>
              <Label>Name</Label>
                <Input
                value={this.props.name}
                onChangeText={value => this.props.dogUpdate({ prop: 'name', value })}
                />
              </Item>
              <Text>Breed</Text>
               <Picker
                mode="dropdown"
                selectedValue={this.props.breed}
                onValueChange={value => this.props.dogUpdate({ prop: 'breed', value })}
                >
                  <Item label="Labrador" value="Labrador" />
                  <Item label="Poodle" value="Poodle" />
                  <Item label="Doxin" value="Doxin" />
                  <Item label="Beagle" value="Beagle" />
                </Picker>
                  <Text>Gender</Text>
                   <Picker
                    mode="dropdown"
                    selectedValue={this.props.gender}
                    onValueChange={value => this.props.dogUpdate({ prop: 'gender', value })}
                    >
                      <Item label="Male" value="Male" />
                      <Item label="Female" value="Female" />
                    </Picker>
                 <Item stackedLabel>
                    <Label>Age</Label>
                      <Input
                      value={this.props.age}
                      onChangeText={value => this.props.dogUpdate({ prop: 'age', value })}
                      />
                    </Item>
                    <Item stackedLabel>
                      <Label>Bio</Label>
                        <Input
                        value={this.props.bio}
                        onChangeText={value => this.props.dogUpdate({ prop: 'bio', value })}
                        />
                      </Item>
                      <Item stackedLabel>
                        <Label>Phone Number</Label>
                          <Input
                          value={this.props.phone}
                          onChangeText={value => this.props.dogUpdate({ prop: 'phone', value })}
                          />
                        </Item>
                    </Form>
                  </Content>
                </Container>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, breed, gender, age, bio } = state.dogForm;

  return { name, breed, gender, age, bio };
};

export default connect(mapStateToProps, { dogUpdate })(DogForm);
