import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import ListItem from '../list-item';

interface Props {
  items: any;
  type: string;
  navigation: any;
}

export default function List({items, type, navigation}: Props) {
  const list = items?.map((element: any, index: any) => {
    return (
      <TouchableOpacity
        key={index}
        onPress={() =>
          navigation.navigate(type, {
            id: element.id,
          })
        }>
        <ListItem title={element.name} />
      </TouchableOpacity>
    );
  });

  return <View>{list}</View>;
}
