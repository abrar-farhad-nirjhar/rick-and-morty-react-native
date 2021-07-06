import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View, Text, Button} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

interface Props {
  header: String;
  children: JSX.Element;
  returnScreen?: string;
}

export default function ScreenContainer({
  header,
  children,
  returnScreen,
}: Props) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {returnScreen && (
        <View style={styles.backButtonContainer}>
          <Icon
            name="arrow-left"
            size={30}
            onPress={() => navigation.navigate(returnScreen)}
            style={styles.iconMargin}
          />
          <Text style={styles.text}>{header}</Text>
        </View>
      )}

      {children}
    </View>
  );
}
