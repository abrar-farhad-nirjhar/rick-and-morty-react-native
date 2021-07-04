import {useQuery} from '@apollo/client';
import React, {createContext, useState, useEffect} from 'react';
import LOCATIONS from '../api/query/locations-query';
export const LocationsContext = createContext({
  locations: [],
  info: null,
  setPage: (value: any) => {},
  locationsLoading: false,
  name: '',
  setName: (value: any) => {},
  type: '',
  setType: (value: any) => {},
  dimension: '',
  setDimension: (value: any) => {},
});

interface Props {
  children: JSX.Element;
}

export function LocationsProvider({children}: Props) {
  const [page, setPage] = useState<number>(1);
  const [name, setName] = useState<string>('');
  const [type, setType] = useState<string>('');
  const [dimension, setDimension] = useState<string>('');
  useEffect(() => {
    setPage(1);
  }, [name, type, dimension]);
  const {
    data: locationsData,
    error: locationsError,
    loading: locationsLoading,
  } = useQuery(LOCATIONS, {
    variables: {
      page,
      filter: {
        name,
        type,
        dimension,
      },
    },
  });

  return (
    <LocationsContext.Provider
      value={{
        locations: locationsData?.locations.results,
        info: locationsData?.locations.info,
        setPage,
        locationsLoading,
        name,
        setName,
        type,
        setType,
        dimension,
        setDimension,
      }}>
      {children}
    </LocationsContext.Provider>
  );
}
