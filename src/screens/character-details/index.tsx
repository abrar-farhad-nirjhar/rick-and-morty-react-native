import React from 'react';
import {View, Text} from 'react-native';
import {CharacterByIDProvider} from '../../contexts/character-by-id';
import CharacterDetailsComponent from '../../components/character-details';
import {useRoute} from '@react-navigation/core';

export default function CharacterDetails() {
  const route: any = useRoute();
  return (
    <CharacterByIDProvider id={route.params.id}>
      <CharacterDetailsComponent />
    </CharacterByIDProvider>
  );
}
