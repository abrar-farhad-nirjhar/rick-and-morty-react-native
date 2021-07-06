import {useNavigation} from '@react-navigation/core';
import React, {useContext} from 'react';
import {View, Text, Image} from 'react-native';
import {HomeContext} from '../../contexts/home';
import {ScreensEnum} from '../../utils/enum';
import CharactersList from '../characters-list';
import Loading from '../_root/loading';
import styles from './styles';

export default function Home() {
  const {rickLoading, mortyLoading, rickData, mortyData} =
    useContext(HomeContext);
  const navigation = useNavigation();
  if (rickLoading || mortyLoading) return <Loading />;

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Welcome!!</Text>
      <Image
        style={styles.img}
        source={require('../../../assets/home-screen-image.png')}
      />
      <Text style={styles.text}>
        Learn more about your favorite characters!
      </Text>
      <CharactersList
        root={ScreensEnum.Characters}
        characters={[rickData, mortyData]}
      />
      <Text style={styles.text}>Or</Text>
      <Text style={styles.text}>Swipe right and lets get started!!!</Text>
    </View>
  );
}
