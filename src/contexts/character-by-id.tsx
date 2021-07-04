import {useQuery} from '@apollo/client';
import {isCompositeType} from 'graphql';
import React, {createContext, useState, useEffect} from 'react';
import CHARACTER from '../api/query/character-by-id-query';
export const CharacterByIDContext = createContext({
  characters: null,
  characterLoading: false,
});

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
    onError(error) {
      console.log(error.message);
    },
    onCompleted() {
      console.log(characterData);
    },
  });

  return (
    <CharacterByIDContext.Provider
      value={{
        characters: characterData?.character,
        characterLoading,
      }}>
      {children}
    </CharacterByIDContext.Provider>
  );
}
