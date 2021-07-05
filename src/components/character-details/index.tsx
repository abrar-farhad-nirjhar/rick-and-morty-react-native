import React, {useContext} from 'react';
import {CharacterByIDContext} from '../../contexts/character-by-id';
import ScreenContainer from '../screen-container';
import Loading from '../_root/loading';
import {View, Image, Text, ScrollView} from 'react-native';
import styles from './style';
import List from '../list';
import {ScreensEnum} from '../../utils/enum';
interface Props {
  navigation: any;
}

export default function CharacterDetails({navigation}: Props) {
  const {character, characterLoading} = useContext(CharacterByIDContext);

  if (characterLoading) return <Loading />;

  return (
    <ScreenContainer header={character.name}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.topBanner}>
          <Image style={styles.image} source={{uri: character.image}} />

          <View style={styles.bannerRight}>
            <Text style={styles.property}>Gender : {character.gender}</Text>
            <Text style={styles.property}>Species : {character.species}</Text>
            <Text style={styles.property}>Status : {character.status}</Text>
            <Text style={styles.property}>Type : {character.status}</Text>
          </View>
        </View>
        <Text style={styles.propertyBottom}>Origin :</Text>
        <List
          navigation={navigation}
          type={ScreensEnum.LocationDetails}
          root={ScreensEnum.Locations}
          items={[character.origin]}
        />
        <Text style={styles.propertyBottom}>Featured in Episodes :</Text>
        <List
          navigation={navigation}
          type={ScreensEnum.EpisodeDetails}
          root={ScreensEnum.Episodes}
          items={character.episode}
        />
      </ScrollView>
    </ScreenContainer>
  );
}
