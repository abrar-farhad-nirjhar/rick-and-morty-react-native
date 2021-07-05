import React, {useContext} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {EpisodeByIDContext} from '../../contexts/episode-by-id';
import ScreenContainer from '../screen-container';
import Loading from '../_root/loading';
import styles from './style';
import CharactersList from '../characters-list';
import {ScreensEnum} from '../../utils/enum';
interface Props {
  navigation: any;
}

export default function LocationDetails({navigation}: Props) {
  const {episode, episodeLoading} = useContext(EpisodeByIDContext);
  console.log(episode, episodeLoading);
  if (episodeLoading) {
    return <Loading />;
  }
  return (
    <ScreenContainer header={episode.name}>
      <View>
        <Text style={styles.properties}>Episode : {episode.episode}</Text>
        <Text style={styles.properties}>Air Date : {episode.air_date}</Text>
        <Text style={styles.properties}>Residents :</Text>
        <ScrollView contentContainerStyle={styles.scroll}>
          <CharactersList
            navigation={navigation}
            characters={episode.characters}
            root={ScreensEnum.Characters}
          />
        </ScrollView>
      </View>
    </ScreenContainer>
  );
}
