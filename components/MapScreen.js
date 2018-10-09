import React, { Component } from 'react';
import { View, Text, TouchableHighlight, TouchableOpacity, SafeAreaView, ActivityIndicator } from 'react-native';
import { Container, Header, Footer, FooterTab, Content, Button, Left, Right, Body, Icon, Card, CardItem } from 'native-base';
import { Location, Permissions, MapView } from 'expo';
import Modal from 'react-native-modal';
import { BarListModal } from './BarListModal';
import Map from './Map';
import YelpService from './Yelp';

const deltas = {
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421
};

const Marker = MapView.Marker;

 class MapScreen extends Component {

     state = {
       mapLoaded: false,
       region: null,
       bars: [],
       isModalVisible: false,
     }

     componentDidMount() {
       this.setState({ mapLoaded: true });
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
      //await this.getLocalBars();
   }

   getLocalBars = async (visible) => {
     const { latitude, longitude } = this.state.region;
     const userLocation = { latitude, longitude };
     const bars = await YelpService.getLocalBars(userLocation);
     this.setState({ bars, isModalVisible: !this.state.isModalVisible });
     console.log(bars.length);

   };
   setModalVisible(visible) {
     this.setState({ modalVisible: visible, numberOfBars: 'yayyyyy' });
   }

   _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });

    goToBarsList = () => {
      this.props.navigation.navigate('list');
      this.setState({ isModalVisible: !this.state.isModalVisible })
    }


    render() {
       const { region, bars, numberOfBars } = this.state;
       let length = '';

       if (bars.length >= 20) {
         length = "Its LITTTT!!!!";
       }
       else if (bars.length < 20) {
         length = "Its sorta lit"
       }
       if (!this.state.mapLoaded) {
         return (
           <View style={{ flex: 1, justifyContent: 'center' }}>
             <ActivityIndicator size="large" />
           </View>
         );
       }
         return (
           <Container>
   <Header style={{ backgroundColor: '#ff0000', height: 70 }}>
     <Left>
     <Button transparent>
       <Icon name="paper" large style={{ color: 'white', fontSize: 40, top: 8 }} />
     </Button>
     </Left>
     <Body style={{ flexDirection: 'row', justifyContent: 'center' }}>
     <Button transparent>
       <Icon name="flame" large style={{ color: 'white', fontSize: 40, top: 8 }} />
     </Button>
     </Body>

     <Right>
     <Button transparent>
       <Icon name="settings" large style={{ color: 'white', fontSize: 40, top: 8 }} />
     </Button>
     </Right>
   </Header>
   <SafeAreaView>

    <Modal isVisible={this.state.isModalVisible}>
      <Card>
        <CardItem>
          <Text>{length}</Text>
        </CardItem>
        <CardItem>
          <Text>There are {bars.length} bars in this area</Text>
        </CardItem>
        <CardItem>
          <Button
            block
            danger
            rounded
            onPress={this.goToBarsList}
          >
          <Text>View Bars</Text>
      </Button>
      </CardItem>
      <CardItem>
        <Button
          block
          info
          onPress={this._toggleModal}
        >
          <Text>Back to Map</Text>
        </Button>
      </CardItem>
      </Card>
    </Modal>
     <Map
       region={region}
       places={bars}
     />
     <View style={styles.buttonContainer}>
       <Button
         iconLeft
         style={{ backgroundColor: '#ff0000', width: 250 }}
         large
         onPress={this.onShowBarLocationsButtonPress}
       >
        <Icon name='search' style={{ fontSize: 50 }} />
         <Text style={{ fontSize: 30, right: 25, color: 'white' }}>See if its lit</Text>
       </Button>
     </View>
   </SafeAreaView>
 </Container>
);
}
}

const styles = {
    buttonContainer: {
      position: 'absolute',
      bottom: 90,
      left: 50,
      right: 0,
    }
  };

export default MapScreen;
