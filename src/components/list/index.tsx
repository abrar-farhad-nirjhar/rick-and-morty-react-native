import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {ScreensEnum} from '../../utils/enum';
import ListItem from '../list-item';

interface Props {
  items: any;
  type: string;
  navigation: any;
  root?: string;
}

export default function List({root, items, type, navigation}: Props) {
  const list = items?.map((element: any, index: any) => {
    return (
      <TouchableOpacity
        key={index}
        onPress={() => {
          if (root) {
            navigation.navigate(root, {
              screen:
                type === ScreensEnum.EpisodeDetails
                  ? ScreensEnum.EpisodesList
                  : ScreensEnum.LocationsList,
              params: {
                id: element.id,
              },
            });
          } else {
            navigation.navigate(type, {id: element.id});
          }
        }}>
        <ListItem title={element.name} />
      </TouchableOpacity>
    );
  });

  return <View>{list}</View>;
}
