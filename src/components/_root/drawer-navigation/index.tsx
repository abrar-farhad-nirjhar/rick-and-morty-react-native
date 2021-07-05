import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../../../screens/home';
import LocationNavigation from '../location-navigation';
import StackNavigation from '../stack-navigation';
import EpisodeNavigation from '../episode-navigation';
import {ScreensEnum} from '../../../utils/enum';
const Drawer = createDrawerNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName={ScreensEnum.Home}>
        <Drawer.Screen name={ScreensEnum.Home} component={Home} />
        <Drawer.Screen
          name={ScreensEnum.Characters}
          component={StackNavigation}
        />
        <Drawer.Screen
          name={ScreensEnum.Locations}
          component={LocationNavigation}
        />
        <Drawer.Screen
          name={ScreensEnum.Episodes}
          component={EpisodeNavigation}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
