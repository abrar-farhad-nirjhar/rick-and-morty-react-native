import React, {useContext} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {EpisodeByIDContext} from '../../contexts/episode-by-id';
import ScreenContainer from '../screen-container';
import Loading from '../_root/loading';
import styles from './style';
import CharactersList from '../characters-list';
import {ScreensEnum} from '../../utils/enum';
import DetailsCard from '../_root/details-card';
import Icon from 'react-native-vector-icons/FontAwesome';

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
        <View style={styles.details}>
          <Icon name={'group'} size={20} style={styles.iconMargin} />
          <Text style={styles.locProperties}>Featured Characters</Text>
        </View>
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
