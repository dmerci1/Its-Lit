import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';


class SavedBarsScreen extends Component {
  state = {
    region: {
   latitude: 37.78825,
   longitude: -122.4324,
   latitudeDelta: 0.0922,
   longitudeDelta: 0.0421,
  }
}

  componentWillMount() {

    const YELP_API_KEY = '6INdFjgrtE61ZymdDNd53m9Wv9xhYQJFFCgXE-Z43P43OIsEsK0KFFykjRF_gmUGtwpoAFGDKpP4FUQIR3Y7RCzWbTKM3yKnjCESh17MhnarMxyvPLMC1eabXouiW3Yx';

    const api = axios.create({
      baseURL: 'https://api.yelp.com/v3',
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      }
    });

    const getLocalBars = userLocation => {
      return api
        .get('/businesses/search', {
          params: {
            categories: 'bars, All',
            ...userLocation
          }
        })
        .then(res =>
          this.setState(business => {
            return {
              name: business.name,
              coords: business.coordinates,
              location: business.location,
              phone: business.phone,
              hours: business.hours,
              price: business.price,
              photos: business.photos

            }

          })

          )
          .catch(error => console.error(error))
    }
      


  }



  render() {
    console.log(this.state);

    return (
      <View>
      <Text>Sup!</Text>

      </View>
    );
  }
}

export default SavedBarsScreen;
