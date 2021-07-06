import React, {useContext} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {EpisodeByIDContext} from '../../contexts/episode-by-id';
import ScreenContainer from '../screen-container';
import Loading from '../_root/loading';
import styles from './style';
import CharactersList from '../characters-list';
import {ScreensEnum} from '../../utils/enum';
import DetailsCard from '../_root/details-card';

export default function EpisodeDetails() {
  const {episode, episodeLoading} = useContext(EpisodeByIDContext);

  if (episodeLoading) {
    return <Loading />;
  }
  return (
    <ScreenContainer
      header={episode.name}
      returnScreen={ScreensEnum.EpisodesList}>
      <View>
        <DetailsCard>
          <>
            <DetailsCard.Element property={'Episode'} value={episode.episode} />
            <DetailsCard.Element
              property={'Air Date'}
              value={episode.air_date}
            />
          </>
        </DetailsCard>

        <Text style={styles.properties}>Characters Featured</Text>
        <ScrollView contentContainerStyle={styles.scroll}>
          <CharactersList
            characters={episode.characters}
            root={ScreensEnum.Characters}
          />
        </ScrollView>
      </View>
    </ScreenContainer>
  );
}
