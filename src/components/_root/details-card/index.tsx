import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';

interface Props {
  children: JSX.Element;
}

interface ElementProps {
  property: string;
  value: string;
}

export default function DetailsCard({children}: Props) {
  return (
    <View>
      <Text style={styles.header}> Information</Text>
      <View style={styles.container}>{children}</View>
    </View>
  );
}

DetailsCard.Element = ({property, value}: ElementProps) => {
  return (
    <>
      {value ? (
        <View style={styles.element}>
          <Text style={styles.text}>{property}</Text>
          <Text style={styles.text}>{value}</Text>
        </View>
      ) : (
        <></>
      )}
    </>
  );
};
