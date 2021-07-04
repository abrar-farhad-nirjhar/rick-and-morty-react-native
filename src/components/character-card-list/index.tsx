import React, {useContext} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {CharacterContext} from '../../contexts/character';
import CharacterCard from '../character-card';
import Pagination from '../_root/pagination';
import styles from './styles';
import Loading from '../_root/loading';
import Filter from '../_root/filter';
import StackNavigator from '../_root/stack-navigation';
import CharacterDetails from '../../screens/character-details';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
interface Props {
  navigation: any;
}
export default function ChacterCardList({navigation}: Props) {
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
    <TouchableOpacity onPress={() => navigation.navigate('CharacterDetails')}>
      <CharacterCard character={character} key={index} />
    </TouchableOpacity>
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
