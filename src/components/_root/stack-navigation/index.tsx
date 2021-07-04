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

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator
      initialRouteName="Characters"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Characters" component={Characters} />
      <Stack.Screen name="CharacterDetails" component={CharacterDetails} />
    </Stack.Navigator>
  );
}
