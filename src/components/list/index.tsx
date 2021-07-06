import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {ScreensEnum} from '../../utils/enum';
import ListItem from '../list-item';

interface Props {
  items: any;
  type: string;

  root?: string;
}

export default function List({root, items, type}: Props) {
  const navigation = useNavigation();
  const list = items?.map((element: any, index: any) => {
    return (
      <TouchableOpacity
        key={index}
        onPress={() => {
          if (root) {
            navigation.navigate(root, {
              screen: type,
              params: {
                id: element.id,
              },
            });
          } else {
            navigation.navigate(type, {id: element.id});
          }
        }}>
        <ListItem
          title={element.name}
          subTitle={
            type === ScreensEnum.EpisodeDetails ? element.episode : element.type
          }
        />
      </TouchableOpacity>
    );
  });

  return <View>{list}</View>;
}
