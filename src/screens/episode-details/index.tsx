import React from 'react';
import {View, Text} from 'react-native';
import {EpisodeByIDProvider} from '../../contexts/episode-by-id';
import EpisodeDetailsComponent from '../../components/episode-details';
import {useRoute} from '@react-navigation/core';

export default function EpisodeDetails() {
  const route: any = useRoute();
  return (
    <EpisodeByIDProvider id={route.params.id}>
      <EpisodeDetailsComponent />
    </EpisodeByIDProvider>
  );
}
