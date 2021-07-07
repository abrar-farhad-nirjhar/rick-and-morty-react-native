import {useQuery} from '@apollo/client';
import React, {createContext} from 'react';
import CHARACTER from '../api/query/character-by-id-query';

interface IHomeContext {
  rickData: any;
  rickLoading: boolean;
  mortyData: any;
  mortyLoading: any;
}

export const HomeContext = createContext({} as IHomeContext);

interface Props {
  children: JSX.Element;
}

export function HomeProvider({children}: Props) {
  const {
    data: rickData,
    error: rickError,
    loading: rickLoading,
  } = useQuery(CHARACTER, {
    variables: {
      id: 1,
    },
  });
  const {
    data: mortyData,
    error: mortyError,
    loading: mortyLoading,
  } = useQuery(CHARACTER, {
    variables: {
      id: 2,
    },
  });

  return (
    <HomeContext.Provider
      value={{
        rickData: rickData?.character,
        rickLoading,
        mortyData: mortyData?.character,
        mortyLoading,
      }}>
      {children}
    </HomeContext.Provider>
  );
}
