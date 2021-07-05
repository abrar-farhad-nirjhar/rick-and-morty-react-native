import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';
interface Props {
  title: string;
}

export default function ListItem({title}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}
