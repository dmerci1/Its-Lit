import React, { Component } from 'react';
import { Text } from 'react-native';
import { Container, Content, Form, Card, Button, Item, Input, Label, List, ListItem, Picker } from 'native-base';
import { connect } from 'react-redux';
import { barUpdate } from '../actions';

class BarForm extends Component  {
  render() {
    return (
      <Container>
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

                  </Content>
                </Container>
    );
  }
}

const mapStateToProps = (state) => {
  const { name } = state.barForm;

  return { name };
};

export default connect(mapStateToProps, { barUpdate })(BarForm);
