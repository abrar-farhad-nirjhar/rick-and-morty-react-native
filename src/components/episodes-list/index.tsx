import React, {useContext} from 'react';
import {View, ScrollView, TouchableOpacity} from 'react-native';
import {EpisodesContext} from '../../contexts/episodes';
import List from '../list';
import ListItem from '../list-item';
import Filter from '../_root/filter';
import Loading from '../_root/loading';
import Pagination from '../_root/pagination';
import styles from './style';

interface Props {
  navigation: any;
}

export default function EpisodesList({navigation}: Props) {
  const {
    episodes,
    episodesLoading,
    name,
    setName,
    episode,
    setEpisode,
    info,
    setPage,
  } = useContext(EpisodesContext);

  const nextAction = () => {
    //@ts-ignore
    setPage(info?.next);
  };

  const prevAction = () => {
    //@ts-ignore
    setPage(info?.prev);
  };

  return (
    <View>
      <Filter>
        <>
          <Filter.NameFilter name={name} setName={setName} />
          <Filter.EpisodeFilter episode={episode} setEpisode={setEpisode} />
        </>
      </Filter>
      {episodesLoading && <Loading />}
      {!episodesLoading && (
        <ScrollView contentContainerStyle={styles.container}>
          <List
            items={episodes}
            navigation={navigation}
            type={'EpisodeDetails'}
          />
          <Pagination
            info={info}
            nextAction={nextAction}
            prevAction={prevAction}
          />
        </ScrollView>
      )}
    </View>
  );
}
