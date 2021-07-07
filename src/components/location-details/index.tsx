import React, {useContext} from 'react';
import {View, ScrollView} from 'react-native';
import {LocationByIDContext} from '../../contexts/location-by-id';
import ScreenContainer from '../screen-container';
import Loading from '../_root/loading';
import styles from './style';
import CharactersList from '../characters-list';
import {ScreensEnum} from '../../utils/enum';
import {useNavigation} from '@react-navigation/core';
import DetailsCard from '../_root/details-card';
import IconHeader from '../_root/icon-header';
export default function LocationDetails() {
  const {location, locationLoading} = useContext(LocationByIDContext);
  const navigation = useNavigation();
  if (locationLoading) {
    return <Loading />;
  }
  return (
    <ScreenContainer
      header={location?.name}
      returnScreen={ScreensEnum.LocationsList}>
      <View>
        <DetailsCard>
          <>
            <DetailsCard.Element property={'Type'} value={location?.type} />
            <DetailsCard.Element
              property={'Dimension'}
              value={location?.dimension}
            />
          </>
        </DetailsCard>

        <IconHeader icon={'group'} text={'Residents'} />
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
