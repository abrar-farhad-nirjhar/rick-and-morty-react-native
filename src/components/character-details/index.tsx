import React, {useContext} from 'react';
import {CharacterByIDContext} from '../../contexts/character-by-id';
import ScreenContainer from '../screen-container';
import Loading from '../_root/loading';
import {View, Image, ScrollView} from 'react-native';
import styles from './style';
import List from '../list';
import {ScreensEnum} from '../../utils/enum';
import {useNavigation} from '@react-navigation/core';
import DetailsCard from '../_root/details-card';
import IconHeader from '../_root/icon-header';
export default function CharacterDetails() {
  const {character, characterLoading} = useContext(CharacterByIDContext);
  const navigation = useNavigation();
  if (characterLoading) return <Loading />;

  return (
    <ScreenContainer
      header={character.name}
      returnScreen={ScreensEnum.CharactersList}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.topBanner}>
          <Image style={styles.image} source={{uri: character.image}} />
        </View>
        <DetailsCard>
          <>
            <DetailsCard.Element property={'Gender'} value={character.gender} />
            <DetailsCard.Element
              property={'Species'}
              value={character.species}
            />
            <DetailsCard.Element property={'Status'} value={character.status} />
            <DetailsCard.Element property={'Type'} value={character.type} />
          </>
        </DetailsCard>

        <IconHeader icon={'location-arrow'} text={'Origin'} />
        <List
          type={ScreensEnum.LocationDetails}
          root={ScreensEnum.Locations}
          items={[character.origin]}
        />
        <IconHeader icon={'tv'} text={'Featured in Episodes'} />
        <List
          type={ScreensEnum.EpisodeDetails}
          root={ScreensEnum.Episodes}
          items={character.episode}
        />
      </ScrollView>
    </ScreenContainer>
  );
}
