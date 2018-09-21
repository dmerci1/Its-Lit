import React, { Component } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { Container, Header, Footer, FooterTab, Content, Button, Left, Right, Body, Icon} from 'native-base';
import { Location, Permissions, MapView } from 'expo';
import Map from './Map';
import YelpService from './Yelp';

const deltas = {
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421
};

 class MapScreen extends Component {
  state = {
    region: null,
    bars: []
  }

  componentWillMount() {
    this.getLocationAsync();
  }

  onShowBarLocationsButtonPress = () => {
    this.getLocalBars();
  }
  onLocationButtonPress = () => {
    this.getLocationAsync();
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
    await this.setState({ region });
  }

  getLocalBars = async () => {
      const { latitude, longitude } = this.state.region;
      const userLocation = { latitude, longitude };
      const bars = await YelpService.getLocalBars(userLocation);
      this.setState({ bars });
    };


  render() {

    const { region, bars } = this.state;
    return (
      <Container>
        <Header style={{ backgroundColor: '#ff0000', height: 70 }}>
          <Left />
          <Body>
            <Text style={{ color: 'white', left: 80, fontSize: 30 }}>Its LIT!</Text>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='search' style={{ fontSize: 40 }} />
            </Button>
          </Right>
        </Header>
        <SafeAreaView>
          <Map
            region={region}
            places={bars}
          />
          <View style={{ position: 'absolute' }}>
            <Button
              block
              danger
              onPress={this.onShowBarLocationsButtonPress}
            >
              <Text>Get Locations</Text>
            </Button>
            <Button
              block
              info
              onPress={this.onLocationButtonPress}
            >
              <Text>Phone Location</Text>
            </Button>
          </View>
        </SafeAreaView>
      </Container>
    );
  }
}



export default MapScreen;
