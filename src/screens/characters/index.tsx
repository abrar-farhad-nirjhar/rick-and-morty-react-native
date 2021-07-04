import React from 'react';
import ScreenContainer from '../../components/screen-container';
import {CharactersProvider} from '../../contexts/character';
import CharacterCardList from '../../components/character-card-list';

interface Props {
  navigation: any;
}

export default function Characters({navigation}: Props) {
  return (
    <CharactersProvider>
      <ScreenContainer header={'Characters'}>
        <CharacterCardList navigation={navigation} />
      </ScreenContainer>
    </CharactersProvider>
  );
}
