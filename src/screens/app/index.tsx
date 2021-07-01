import {useQuery} from '@apollo/client';
import React from 'react';
import {View, Text} from 'react-native';
import {CHARACTERS} from '../../api/query/characters-query';
export default function MainApp() {
  const {data, loading, error} = useQuery(CHARACTERS);
  console.log(data);
  return (
    <View>
      <Text>Hello world</Text>
    </View>
  );
}
