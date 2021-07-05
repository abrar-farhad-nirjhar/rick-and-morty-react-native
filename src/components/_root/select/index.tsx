import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

interface Props {
  title: string;
  values: string[];
  value: string;
  setValue: (value: string) => void;
}

export default function Select({title, values, value, setValue}: Props) {
  return (
    <View style={styles.select}>
      <Text style={styles.headerText}>Select a {title}</Text>
      <View style={styles.selectElements}>
        <View style={value === '' ? styles.selected : styles.unSelected}>
          <Text
            onPress={() => setValue('')}
            style={value === '' ? styles.boxTextSelected : styles.boxText}>
            ALL
          </Text>
        </View>
        {values.map((element, index) => {
          return (
            <View
              key={index}
              style={value === element ? styles.selected : styles.unSelected}>
              <Text
                onPress={() => setValue(element)}
                style={
                  value === element ? styles.boxTextSelected : styles.boxText
                }>
                {element.toUpperCase()}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}
