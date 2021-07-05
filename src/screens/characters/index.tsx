import React from 'react';
import ScreenContainer from '../../components/screen-container';
import {CharactersProvider} from '../../contexts/character';
import CharacterCardList from '../../components/character-card-list';

export default function Characters() {
  return (
    <CharactersProvider>
      <ScreenContainer header={'Characters'}>
        <CharacterCardList />
      </ScreenContainer>
    </CharactersProvider>
  );
}
