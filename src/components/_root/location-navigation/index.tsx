import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import LocationDetails from '../../../screens/location-details';
import Locations from '../../../screens/locations';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator
      initialRouteName="Locations"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Locations" component={Locations} />
      <Stack.Screen name="LocationDetails" component={LocationDetails} />
    </Stack.Navigator>
  );
}
