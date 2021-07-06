import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useContext, useEffect} from 'react';
import {View, ScrollView} from 'react-native';
import {EpisodesContext} from '../../contexts/episodes';
import {ScreensEnum} from '../../utils/enum';
import List from '../list';
import Filter from '../_root/filter';
import Loading from '../_root/loading';
import Pagination from '../_root/pagination';
import styles from './style';

export default function EpisodesList() {
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
          <List items={episodes} type={ScreensEnum.EpisodeDetails} />
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
