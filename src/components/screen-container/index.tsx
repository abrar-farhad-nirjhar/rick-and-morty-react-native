import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
interface Props {
  header: String;
  children: JSX.Element;
}

export default function ScreenContainer({header, children}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{header}</Text>
      {children}
    </View>
  );
}
