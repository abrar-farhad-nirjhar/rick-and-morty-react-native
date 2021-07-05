import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import LocationDetails from '../../../screens/location-details';
import Locations from '../../../screens/locations';
import {ScreensEnum} from '../../../utils/enum';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator
      initialRouteName={ScreensEnum.Locations}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={ScreensEnum.Locations} component={Locations} />
      <Stack.Screen
        name={ScreensEnum.LocationDetails}
        component={LocationDetails}
      />
    </Stack.Navigator>
  );
}
