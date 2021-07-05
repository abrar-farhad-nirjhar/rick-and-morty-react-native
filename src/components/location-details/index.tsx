import React, {useContext} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {LocationByIDContext} from '../../contexts/location-by-id';
import ScreenContainer from '../screen-container';
import Loading from '../_root/loading';
import styles from './style';
import ImageView from '../_root/image-view';
import CharactersList from '../characters-list';
interface Props {
  navigation: any;
}

export default function LocationDetails({navigation}: Props) {
  const {location, locationLoading} = useContext(LocationByIDContext);
  console.log(location, locationLoading);
  if (locationLoading) {
    return <Loading />;
  }
  return (
    <ScreenContainer header={location.name}>
      <View>
        <Text style={styles.properties}>Type : {location.type}</Text>
        <Text style={styles.properties}>Dimension : {location.dimension}</Text>
        <Text style={styles.properties}>Residents :</Text>
        <ScrollView contentContainerStyle={styles.scroll}>
          <View style={styles.scrollView}>
            <CharactersList
              navigation={navigation}
              characters={location.residents}
            />
          </View>
        </ScrollView>
      </View>
    </ScreenContainer>
  );
}
