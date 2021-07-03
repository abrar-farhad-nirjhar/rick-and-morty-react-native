import React, {useContext} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {CharacterContext} from '../../contexts/character';
import CharacterCard from '../character-card';
import Pagination from '../_root/pagination';
import styles from './styles';
import Loading from '../_root/loading';
import Filter from '../_root/filter';
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
  const characterCards = characters?.map((character, index) => (
    <CharacterCard character={character} key={index} />
  ));

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
        <ScrollView style={styles.container}>
          {characterCards}

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
