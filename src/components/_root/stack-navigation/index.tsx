import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Characters from '../../../screens/characters';
import CharacterDetails from '../../../screens/character-details';

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
