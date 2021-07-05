import React, {useContext, useEffect} from 'react';
import {View, ScrollView, TouchableOpacity} from 'react-native';
import {LocationsContext} from '../../contexts/locations';
import ListItem from '../list-item';
import Filter from '../_root/filter';
import Loading from '../_root/loading';
import Pagination from '../_root/pagination';
import styles from './style';
import List from '../list';
import {ScreensEnum} from '../../utils/enum';
import {useNavigation, useRoute} from '@react-navigation/core';

export default function LocationsList() {
  const {
    locations,
    locationsLoading,
    name,
    setName,
    type,
    setType,
    dimension,
    setDimension,
    info,
    setPage,
  } = useContext(LocationsContext);

  const route: any = useRoute();
  const navigation: any = useNavigation();
  useEffect(() => {
    if (route?.params?.id) {
      navigation.navigate(ScreensEnum.LocationDetails, {id: route.params.id});
    }
  }, [route]);

  const nextAction = () => {
    //@ts-ignore
    setPage(info?.next);
  };

  const prevAction = () => {
    //@ts-ignore
    setPage(info?.prev);
  };

  return (
    <View>
      <Filter>
        <>
          <Filter.NameFilter name={name} setName={setName} />
          <Filter.TypeFilter type={type} setType={setType} />
          <Filter.DimensionFilter
            dimension={dimension}
            setDimension={setDimension}
          />
        </>
      </Filter>
      {locationsLoading && <Loading />}
      {!locationsLoading && (
        <ScrollView contentContainerStyle={styles.container}>
          <List
            items={locations}
            navigation={navigation}
            type={ScreensEnum.LocationDetails}
          />
          <Pagination
            info={info}
            nextAction={nextAction}
            prevAction={prevAction}
          />
        </ScrollView>
      )}
    </View>
  );
}
