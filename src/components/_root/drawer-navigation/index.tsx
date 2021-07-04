import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../../../screens/home';
import Characters from '../../../screens/characters';
import Locations from '../../../screens/locations';
import Episodes from '../../../screens/episodes';
import CharacterDetails from '../../../screens/character-details';
import {Screen} from 'react-native-screens';
import StackNavigation from '../stack-navigation';
const Drawer = createDrawerNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Characters" component={StackNavigation} />
        <Drawer.Screen name="Locations" component={Locations} />
        <Drawer.Screen name="Episodes" component={Episodes} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
