import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './style';
interface Props {
  resident: any;
}

export default function ImageView({resident}: Props) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: resident.image}} />
      <Text style={styles.text}>{resident.name}</Text>
    </View>
  );
}
