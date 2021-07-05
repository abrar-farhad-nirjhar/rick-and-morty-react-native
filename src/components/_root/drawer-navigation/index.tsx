import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../../../screens/home';
import Locations from '../../../screens/locations';
import Episodes from '../../../screens/episodes';
import LocationNavigation from '../location-navigation';
import StackNavigation from '../stack-navigation';
const Drawer = createDrawerNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Characters" component={StackNavigation} />
        <Drawer.Screen name="Locations" component={LocationNavigation} />
        <Drawer.Screen name="Episodes" component={Episodes} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
