import {useQuery} from '@apollo/client';
import React, {createContext} from 'react';
import EPISODE from '../api/query/episode-by-id-query';

interface InitialValues {
  episode: any;
  episodeLoading: boolean;
}

export const EpisodeByIDContext = createContext({} as InitialValues);

interface Props {
  id: number;
  children: JSX.Element;
}

export function EpisodeByIDProvider({id, children}: Props) {
  const {
    data: episodeData,
    error: episodeError,
    loading: episodeLoading,
  } = useQuery(EPISODE, {
    variables: {
      id,
    },
  });

  return (
    <EpisodeByIDContext.Provider
      value={{
        episode: episodeData?.episode,
        episodeLoading,
      }}>
      {children}
    </EpisodeByIDContext.Provider>
  );
}
