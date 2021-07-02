import {useQuery} from '@apollo/client';
import React, {createContext, useState, useEffect} from 'react';
import CHARACTERS from '../api/query/characters-query';
export const CharacterContext = createContext({
  characters: [],
  info: null,
  setPage: (value: any) => {},
  charactersLoading: false,
});

interface Props {
  children: JSX.Element;
}

export function CharactersProvider({children}: Props) {
  const [page, setPage] = useState<number>(1);
  const {
    data: charactersData,
    error: charactersError,
    loading: charactersLoading,
  } = useQuery(CHARACTERS, {
    variables: {
      page,
      filter: {},
    },
  });
  return (
    <CharacterContext.Provider
      value={{
        characters: charactersData?.characters.results,
        info: charactersData?.characters.info,
        setPage,
        charactersLoading,
      }}>
      {children}
    </CharacterContext.Provider>
  );
}
