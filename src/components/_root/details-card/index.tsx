import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome';

interface Props {
  children: JSX.Element;
}

interface ElementProps {
  property: string;
  value: string;
}

const getIconName = (type: string) => {
  switch (type.toLowerCase()) {
    case 'gender':
      return 'user-o';
    case 'species':
      return 'bug';
    case 'status':
      return 'heartbeat';
    case 'type':
      return 'clipboard';
    case 'dimension':
      return 'connectdevelop';
    case 'air date':
      return 'calendar';
    case 'episode':
      return 'tv';
    default:
      return 'bug';
  }
};

export default function DetailsCard({children}: Props) {
  return (
    <View>
      <View style={styles.infoContainer}>
        <Icon name="id-card-o" size={20} style={styles.iconMargin} />
        <Text style={styles.header}> Information</Text>
      </View>
      <View style={styles.container}>{children}</View>
    </View>
  );
}

DetailsCard.Element = ({property, value}: ElementProps) => {
  return (
    <>
      {value ? (
        <View style={styles.element}>
          <View style={styles.left}>
            <Icon
              name={getIconName(property)}
              size={20}
              style={styles.iconMargin}
            />
            <Text style={styles.text}>{property}</Text>
          </View>
          <Text style={styles.text}>{value}</Text>
        </View>
      ) : (
        <></>
      )}
    </>
  );
};
