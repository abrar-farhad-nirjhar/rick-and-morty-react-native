import React from 'react';
import {View, Button} from 'react-native';
import styles from './styles';
import variables from '../../../utils/variables';
interface Props {
  info: any;
  prevAction: () => void;
  nextAction: () => void;
}

export default function Pagination({info, prevAction, nextAction}: Props) {
  return (
    <View style={styles.container}>
      {info && (
        <Button
          color="black"
          disabled={!info.next}
          onPress={nextAction}
          title="Next"
        />
      )}
      {info && (
        <Button
          color="black"
          disabled={!info.prev}
          onPress={prevAction}
          title="Prev"
        />
      )}
    </View>
  );
}
