import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';
interface Props {
  type: string;
  id: number;
  title: string;
}

export default function ListItem({type, id, title}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}
