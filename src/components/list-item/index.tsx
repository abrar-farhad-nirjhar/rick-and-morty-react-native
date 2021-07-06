import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';
interface Props {
  title: string;
  subTitle: string;
}

export default function ListItem({title, subTitle}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.subText}>{subTitle}</Text>
    </View>
  );
}
