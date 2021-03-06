import React, {useContext, useEffect} from 'react';
import {ScrollView, View} from 'react-native';
import {CharacterContext} from '../../contexts/character';
import Pagination from '../_root/pagination';
import styles from './styles';
import Loading from '../_root/second-loading';
import Filter from '../_root/filter';
import {createStackNavigator} from '@react-navigation/stack';
import CharactersList from '../characters-list';
import {useNavigation} from '@react-navigation/core';

const Stack = createStackNavigator();

export default function ChacterCardList() {
  const {
    characters,
    info,
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
  } = useContext(CharacterContext);

  const navigation: any = useNavigation();

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
          <Filter.TypeFilter type={type} setType={setType} />
          <Filter.SpeciesFilter species={species} setSpecies={setSpecies} />
          <Filter.GenderFilter gender={gender} setGender={setGender} />
          <Filter.StatusFilter status={status} setStatus={setStatus} />
        </>
      </Filter>
      {charactersLoading && <Loading />}
      {!charactersLoading && (
        <ScrollView contentContainerStyle={styles.scroll}>
          <CharactersList characters={characters} />
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
