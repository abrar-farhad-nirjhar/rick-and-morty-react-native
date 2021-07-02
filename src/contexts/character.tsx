import {useQuery} from '@apollo/client';
import React, {createContext, useState, useEffect} from 'react';
import CHARACTERS from '../api/query/characters-query';
export const CharacterContext = createContext({
  characters: [],
  info: null,
  setPage: (value: any) => {},
  charactersLoading: false,
  name: '',
  setName: (value: any) => {},
  type: '',
  setType: (value: any) => {},
});

interface Props {
  children: JSX.Element;
}

export function CharactersProvider({children}: Props) {
  const [page, setPage] = useState<number>(1);
  const [name, setName] = useState<string>('');
  const [type, setType] = useState<string>('');
  const {
    data: charactersData,
    error: charactersError,
    loading: charactersLoading,
  } = useQuery(CHARACTERS, {
    variables: {
      page,
      filter: {
        name,
        type,
      },
    },
  });

  return (
    <CharacterContext.Provider
      value={{
        characters: charactersData?.characters.results,
        info: charactersData?.characters.info,
        setPage,
        charactersLoading,
        name,
        setName,
        type,
        setType,
      }}>
      {children}
    </CharacterContext.Provider>
  );
}
