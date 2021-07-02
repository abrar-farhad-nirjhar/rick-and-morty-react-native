import React, {useContext} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {CharacterContext} from '../../contexts/character';
import CharacterCard from '../character-card';
import Pagination from '../_root/pagination';
import styles from './styles';
export default function ChacterCardList() {
  const {characters, info, setPage} = useContext(CharacterContext);
  const characterCards = characters?.map((character, index) => (
    <CharacterCard character={character} key={index} />
  ));
  console.log(info);
  const nextAction = () => {
    //@ts-ignore
    setPage(info?.next);
  };

  const prevAction = () => {
    //@ts-ignore
    setPage(info?.prev);
  };

  return (
    <ScrollView style={styles.container}>
      {characterCards}

      <Pagination info={info} nextAction={nextAction} prevAction={prevAction} />
    </ScrollView>
  );
}
