import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import EpisodeDetails from '../../../screens/episode-details';
import Episdoes from '../../../screens/episodes';
import {ScreensEnum} from '../../../utils/enum';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator
      initialRouteName={ScreensEnum.EpisodesList}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={ScreensEnum.EpisodesList} component={Episdoes} />
      <Stack.Screen
        name={ScreensEnum.EpisodeDetails}
        component={EpisodeDetails}
      />
    </Stack.Navigator>
  );
}
