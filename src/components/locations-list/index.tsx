import React, {useContext} from 'react';
import {View, ScrollView, TouchableOpacity} from 'react-native';
import {LocationsContext} from '../../contexts/locations';
import ListItem from '../list-item';
import Filter from '../_root/filter';
import Loading from '../_root/loading';
import Pagination from '../_root/pagination';
import styles from './style';
import List from '../list';
interface Props {
  navigation: any;
}

export default function LocationsList({navigation}: Props) {
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
            type={'LocationDetails'}
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
