import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../../../screens/home';
import Characters from '../../../screens/characters';
import Locations from '../../../screens/locations';
import Episodes from '../../../screens/episodes';
const Drawer = createDrawerNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Characters" component={Characters} />
        <Drawer.Screen name="Locations" component={Locations} />
        <Drawer.Screen name="Episodes" component={Episodes} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
