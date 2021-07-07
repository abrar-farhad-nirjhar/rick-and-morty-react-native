import React, {useContext} from 'react';
import {View, ScrollView} from 'react-native';
import {LocationsContext} from '../../contexts/locations';
import Filter from '../_root/filter';
import Loading from '../_root/second-loading';
import Pagination from '../_root/pagination';
import styles from './style';
import List from '../list';
import {ScreensEnum} from '../../utils/enum';

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
          <List items={locations} type={ScreensEnum.LocationDetails} />
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
