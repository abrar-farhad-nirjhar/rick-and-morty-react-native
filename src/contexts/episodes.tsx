import {useQuery} from '@apollo/client';
import React, {createContext, useState, useEffect} from 'react';
import EPISODES from '../api/query/episodes-query';
export const EpisodesContext = createContext({
  episodes: [],
  info: null,
  setPage: (value: any) => {},
  episodesLoading: false,
  name: '',
  setName: (value: any) => {},
  episode: '',
  setEpisode: (value: any) => {},
});

interface Props {
  children: JSX.Element;
}

export function EpisodesProvider({children}: Props) {
  const [page, setPage] = useState<number>(1);
  const [name, setName] = useState<string>('');
  const [episode, setEpisode] = useState<string>('');
  useEffect(() => {
    setPage(1);
  }, [name, episode]);
  const {
    data: episodesData,
    error: episodesError,
    loading: episodesLoading,
  } = useQuery(EPISODES, {
    variables: {
      page,
      filter: {
        name,
        episode,
      },
    },
  });

  return (
    <EpisodesContext.Provider
      value={{
        episodes: episodesData?.episodes.results,
        info: episodesData?.episodes.info,
        setPage,
        episodesLoading,
        name,
        setName,
        episode,
        setEpisode,
      }}>
      {children}
    </EpisodesContext.Provider>
  );
}
