import React from 'react';
import {View, Text} from 'react-native';
import {CharacterByIDProvider} from '../../contexts/character-by-id';
import CharacterDetailsComponent from '../../components/character-details';
interface Props {
  route: any;
  navigation: any;
}
export default function CharacterDetails({route, navigation}: Props) {
  return (
    <CharacterByIDProvider id={route.params.id}>
      <CharacterDetailsComponent navigation={navigation} />
    </CharacterByIDProvider>
  );
}
