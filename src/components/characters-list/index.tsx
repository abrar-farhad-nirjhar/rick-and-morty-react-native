import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {ScreensEnum} from '../../utils/enum';
import ImageView from '../_root/image-view';
import styles from './style';
import {useNavigation} from '@react-navigation/native';

interface Props {
  characters: any;
  root?: string;
}

export default function CharactersList({root, characters}: Props) {
  const navigation = useNavigation();

  return (
    <View style={styles.scrollView}>
      {characters?.map((character: any, index: any) => (
        <TouchableOpacity
          key={index}
          style={{width: 110}}
          onPress={() => {
            if (root) {
              navigation.navigate(root, {
                screen: ScreensEnum.CharacterDetails,
                params: {
                  id: character.id,
                },
              });
            } else {
              navigation.navigate(ScreensEnum.CharacterDetails, {
                id: character.id,
              });
            }
          }}>
          <ImageView resident={character} />
        </TouchableOpacity>
      ))}
    </View>
  );
}
