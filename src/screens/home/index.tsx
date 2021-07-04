import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Welcome!!</Text>
      <Image
        style={styles.img}
        source={require('../../../assets/home-screen-image.png')}
      />
      <Text style={styles.text}>
        Welcome to your one stop solution to everything Rick and Morty!!!
      </Text>
      <Text style={styles.text}>Swipe right and lets get started!!!</Text>
    </View>
  );
}
