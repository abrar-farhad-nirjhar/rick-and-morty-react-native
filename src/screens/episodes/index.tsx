import React from 'react';
import ScreenContainer from '../../components/screen-container';
import EpisodesList from '../../components/episodes-list';
import {EpisodesProvider} from '../../contexts/episodes';

export default function Episodes() {
  return (
    <EpisodesProvider>
      <ScreenContainer header={'Episodes'}>
        <EpisodesList />
      </ScreenContainer>
    </EpisodesProvider>
  );
}
