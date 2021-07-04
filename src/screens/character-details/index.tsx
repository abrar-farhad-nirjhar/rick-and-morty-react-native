import React from 'react';
import {View, Text} from 'react-native';
import {CharacterByIDProvider} from '../../contexts/character-by-id';
interface Props {
  route: any;
  navigation: any;
}
export default function CharacterDetails({route, navigation}: Props) {
  return (
    <CharacterByIDProvider id={route.params.id}>
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Text>Character Details</Text>
      </View>
    </CharacterByIDProvider>
  );
}
