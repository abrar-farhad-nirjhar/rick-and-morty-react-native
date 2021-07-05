import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import EpisodeDetails from '../../../screens/episode-details';
import Episdoes from '../../../screens/episodes';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator
      initialRouteName="Episodes"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Episodes" component={Episdoes} />
      <Stack.Screen name="EpisodeDetails" component={EpisodeDetails} />
    </Stack.Navigator>
  );
}
