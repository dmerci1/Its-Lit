import React, { Component } from 'react';
import {  View, FlatList, Text, Image } from 'react-native';
import { List, ListItem, Button, Card, CardItem } from 'native-base';
import axios from 'axios';
import { Location, Permissions } from 'expo';
import BarDetails from './BarDetails';
import YelpService from './Yelp';

const deltas = {
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421
};

class BarListScreen extends Component {
  state = { albums: [],
    region: null,
     bars: []
   };

  componentDidMount() {
    this.getLocationAsync();
  }
  componentWillReceiveProps(nextProps) {

  }
  onRegionChangeComplete = (region) => {
    this.setState({ region });
  }
  onButtonPress = () => {
 console.log(this.state.region);
}
onShowBarLocationsButtonPress = () => {
 this.getLocalBars();
}
getLocationAsync = async () => {
  let { status } = await Permissions.askAsync(Permissions.LOCATION);
  if (status !== 'granted') {
    this.setState({
      errorMessage: 'Permission to access location was denied'
    });
  }

  let location = await Location.getCurrentPositionAsync({});
  const region = {
    latitude: location.coords.latitude,
    longitude: location.coords.longitude,
    ...deltas
  };
   this.setState({ region });
   await this.getLocalBars();
}

getLocalBars = async () => {
  const { latitude, longitude } = this.state.region;
  const userLocation = { latitude, longitude };
  const bars = await YelpService.getLocalBars(userLocation);

  this.setState({ bars });
};

  showBar(bar) {
    firebase.database().ref('/bars')
    .push({ bar })
}

  render() {
    console.log(this.state);

    return (
      <FlatList
        data={this.state.bars}
        renderItem={
          ({ item }) => (
            <BarDetails
            bar={item}
            navigation={this.props.navigation}
            onRowPress={(bar) => this.showBar(bar)}
            />
          )
        }
          keyExtractor={item => item.id}
      />
    );
  }
}

export default BarListScreen;
