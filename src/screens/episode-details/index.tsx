import React from 'react';
import {View, Text} from 'react-native';
import {EpisodeByIDProvider} from '../../contexts/episode-by-id';
import EpisodeDetails from '../../components/episode-details';
interface Props {
  route: any;
  navigation: any;
}
export default function CharacterDetails({route, navigation}: Props) {
  return (
    <EpisodeByIDProvider id={route.params.id}>
      <EpisodeDetails navigation={navigation} />
    </EpisodeByIDProvider>
  );
}
