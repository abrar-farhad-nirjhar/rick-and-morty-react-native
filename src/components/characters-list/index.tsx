import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import ImageView from '../_root/image-view';
import styles from './style';

interface Props {
  characters: any;
  navigation: any;
}

export default function CharactersList({characters, navigation}: Props) {
  return (
    <View style={styles.scrollView}>
      {characters.map((character: any, index: any) => (
        <TouchableOpacity
          key={index}
          style={{width: 110}}
          onPress={() =>
            navigation.navigate('CharacterDetails', {id: character.id})
          }>
          <ImageView resident={character} />
        </TouchableOpacity>
      ))}
    </View>
  );
}
