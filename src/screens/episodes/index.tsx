import React from 'react';
import ScreenContainer from '../../components/screen-container';
import EpisodesList from '../../components/episodes-list';
import {EpisodesProvider} from '../../contexts/episodes';
interface Props {
  navigation: any;
}
export default function Episodes({navigation}: Props) {
  return (
    <EpisodesProvider>
      <ScreenContainer header={'Episodes'}>
        <EpisodesList navigation={navigation} />
      </ScreenContainer>
    </EpisodesProvider>
  );
}
