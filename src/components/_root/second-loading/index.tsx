import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
export default function Loading() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require('../../../../assets/monster-transparent-image.png')}
      />
      <Text style={styles.text}>Your time is all ripped up to hell!!!</Text>
    </View>
  );
}
