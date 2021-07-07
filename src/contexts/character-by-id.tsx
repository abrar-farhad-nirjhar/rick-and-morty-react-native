import {useQuery} from '@apollo/client';
import React, {createContext} from 'react';
import CHARACTER from '../api/query/character-by-id-query';

interface ICharacterByIDContext {
  character: any;
  characterLoading: boolean;
}

export const CharacterByIDContext = createContext({} as ICharacterByIDContext);

interface Props {
  id: number;
  children: JSX.Element;
}

export function CharacterByIDProvider({id, children}: Props) {
  const {
    data: characterData,
    error: characterError,
    loading: characterLoading,
  } = useQuery(CHARACTER, {
    variables: {
      id,
    },
  });

  return (
    <CharacterByIDContext.Provider
      value={{
        character: characterData?.character,
        characterLoading,
      }}>
      {children}
    </CharacterByIDContext.Provider>
  );
}
