import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

interface Props {
  icon: string;
  text: string;
}

export default function IconHeader({icon, text}: Props) {
  return (
    <View style={styles.details}>
      <Icon name={icon} size={20} style={styles.iconMargin} />
      <Text style={styles.locProperties}>{text}</Text>
    </View>
  );
}
