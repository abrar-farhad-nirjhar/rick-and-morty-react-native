import {useQuery} from '@apollo/client';
import {isCompositeType} from 'graphql';
import React, {createContext, useState, useEffect} from 'react';
import LOCATION from '../api/query/location-by-id-query';

interface InitialValues {
  location: any;
  locationLoading: boolean;
}

export const LocationByIDContext = createContext({} as InitialValues);

interface Props {
  id: number;
  children: JSX.Element;
}

export function LocationByIDProvider({id, children}: Props) {
  const {
    data: locationData,
    error: locationError,
    loading: locationLoading,
  } = useQuery(LOCATION, {
    variables: {
      id,
    },
  });

  return (
    <LocationByIDContext.Provider
      value={{
        location: locationData?.location,
        locationLoading,
      }}>
      {children}
    </LocationByIDContext.Provider>
  );
}
