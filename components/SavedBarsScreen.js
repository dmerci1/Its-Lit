import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

const mapState = (state) => ({
  data: state.test.data
});

class SavedBarsScreen extends Component {
  render() {
  return (
    <View>
      <Text>Test</Text>
      <Text>The answer is: {this.props.data}</Text>
    </View>
  );
}
}

export default connect(mapState)(SavedBarsScreen);
