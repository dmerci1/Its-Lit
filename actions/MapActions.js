import { Location, Permissions } from 'expo';
import { GET_LOCATION } from './types';
import axios from 'axios';

const deltas = {
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421
};

export const getLocationAsync = async (dispatch) => {
  try {
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
    dispatch({ type: GET_LOCATION, payload: region });
    //await this.getLocalBars();
 } catch(e) {
   console.log(e);
 }
};
