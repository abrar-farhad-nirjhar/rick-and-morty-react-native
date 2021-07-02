import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
interface Props {
  info: any;
}

export default function Pagination({info}: Props) {
  return (
    <View style={styles.container}>
      {info.next && <Text>Next</Text>}
      {info.prev && <Text>Prev</Text>}
    </View>
  );
}
