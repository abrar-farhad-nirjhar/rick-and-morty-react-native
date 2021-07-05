import React, {useContext} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {LocationByIDContext} from '../../contexts/location-by-id';
import ScreenContainer from '../screen-container';
import Loading from '../_root/loading';
import styles from './style';
import ImageView from '../_root/image-view';
import CharactersList from '../characters-list';
import {ScreensEnum} from '../../utils/enum';
import {useNavigation} from '@react-navigation/core';

export default function LocationDetails() {
  const {location, locationLoading} = useContext(LocationByIDContext);
  const navigation = useNavigation();
  if (locationLoading) {
    return <Loading />;
  }
  return (
    <ScreenContainer header={location?.name}>
      <View>
        <Text style={styles.properties}>Type : {location?.type}</Text>
        <Text style={styles.properties}>Dimension : {location?.dimension}</Text>
        <Text style={styles.properties}>Residents :</Text>
        <ScrollView contentContainerStyle={styles.scroll}>
          <View style={styles.scrollView}>
            <CharactersList
              characters={location?.residents}
              root={ScreensEnum.Characters}
            />
          </View>
        </ScrollView>
      </View>
    </ScreenContainer>
  );
}
