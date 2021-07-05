import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Characters from '../../../screens/characters';
import CharacterDetails from '../../../screens/character-details';
import {ScreensEnum} from '../../../utils/enum';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator
      initialRouteName={ScreensEnum.Characters}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={ScreensEnum.CharactersList} component={Characters} />
      <Stack.Screen
        name={ScreensEnum.CharacterDetails}
        component={CharacterDetails}
      />
    </Stack.Navigator>
  );
}
