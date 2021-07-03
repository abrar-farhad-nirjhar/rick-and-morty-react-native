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
  gender: '',
  setGender: (value: any) => {},
  status: '',
  setStatus: (value: any) => {},
  species: '',
  setSpecies: (value: any) => {},
});

interface Props {
  children: JSX.Element;
}

export function CharactersProvider({children}: Props) {
  const [page, setPage] = useState<number>(1);
  const [name, setName] = useState<string>('');
  const [type, setType] = useState<string>('');
  const [gender, setGender] = useState<string>('');
  const [status, setStatus] = useState<string>('');
  const [species, setSpecies] = useState<string>('');
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
        gender,
        status,
        species,
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
        gender,
        setGender,
        status,
        setStatus,
        species,
        setSpecies,
      }}>
      {children}
    </CharacterContext.Provider>
  );
}
