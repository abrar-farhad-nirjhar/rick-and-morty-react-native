import React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import Home from '../../../screens/home';
import LocationNavigation from '../location-navigation';
import StackNavigation from '../stack-navigation';
import EpisodeNavigation from '../episode-navigation';
import {ScreensEnum} from '../../../utils/enum';
import {Text, View} from 'react-native';
import {Image} from 'react-native-elements/dist/image/Image';

const Drawer = createDrawerNavigator();

interface Props {
  navigation: any;
}

//@ts-ignore
const CustomDrawerComponent = props => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Image
          style={{width: 200, height: 200}}
          source={require('../../../../assets/home-screen-image.png')}
        />
      </View>
      <DrawerItem
        label={ScreensEnum.Home}
        onPress={() => props.navigation.navigate(Home)}
      />
      <DrawerItem
        label={ScreensEnum.Characters}
        onPress={() => props.navigation.navigate(ScreensEnum.Characters)}
      />
      <DrawerItem
        label={ScreensEnum.Episodes}
        onPress={() => props.navigation.navigate(ScreensEnum.Episodes)}
      />
      <DrawerItem
        label={ScreensEnum.Locations}
        onPress={() => props.navigation.navigate(ScreensEnum.Locations)}
      />
    </DrawerContentScrollView>
  );
};

export default function Navigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName={ScreensEnum.Home}
        drawerContentOptions={{
          activeBackgroundColor: 'grey',
          activeTintColor: 'white',
        }}
        drawerContent={props => <CustomDrawerComponent {...props} />}>
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
