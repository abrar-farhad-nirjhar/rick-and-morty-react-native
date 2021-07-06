import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View, Text, Button} from 'react-native';
import styles from './styles';

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
          <Button
            onPress={() => navigation.navigate(returnScreen)}
            title={'Back to List'}
          />
        </View>
      )}
      <Text style={styles.text}>{header}</Text>
      {children}
    </View>
  );
}
