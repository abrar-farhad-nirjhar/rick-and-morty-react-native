import React, {useContext} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {EpisodeByIDContext} from '../../contexts/episode-by-id';
import ScreenContainer from '../screen-container';
import Loading from '../_root/loading';
import styles from './style';
import ImageView from '../_root/image-view';

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
          <View style={styles.scrollView}>
            {episode.characters.map((character: any, index: any) => (
              <TouchableOpacity
                key={index}
                style={{width: 110}}
                onPress={() =>
                  navigation.navigate('CharacterDetails', {id: character.id})
                }>
                <ImageView resident={character} />
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    </ScreenContainer>
  );
}
