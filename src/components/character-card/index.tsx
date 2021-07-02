import React from 'react';
import {View, Image, Text} from 'react-native';
import {Character} from '../../utils/interfaces';
import styles from './styles';

interface Props {
  character: Character;
}

export default function CharacterCard({character}: Props) {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{uri: character.image}} />
      <Text style={styles.text}>{character.name}</Text>
    </View>
  );
}
