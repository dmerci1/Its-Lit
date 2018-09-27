import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import axios from 'axios';
import { Location, Permissions, MapView } from 'expo';
import BarDetails from './BarDetails';
import YelpService from './Yelp';

const deltas = {
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421
};

class AlbumList extends Component {
  state = { albums: [],
    region: null,
     bars: []
   };

   componentWillMount() {
     axios.get('https://rallycoding.herokuapp.com/api/music_albums')
       .then(response => this.setState({ albums: response.data }));
   }
  componentDidMount() {
    this.getLocationAsync();
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
  console.log(bars);
};

  renderBars() {
    return this.state.bars.map(bar =>
      <BarDetails key={bar.title} bar={bar} />
    );
  }

  render() {
    console.log(this.state);

    return (
    <View>
      <ScrollView>
        {this.renderBars()}
      </ScrollView>
    </View>
    );
  }
}

export default AlbumList;
