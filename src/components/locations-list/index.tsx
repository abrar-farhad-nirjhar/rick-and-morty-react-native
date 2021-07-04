import React, {useContext} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {LocationsContext} from '../../contexts/locations';
import ListItem from '../list-item';
import Filter from '../_root/filter';
import Loading from '../_root/loading';
import Pagination from '../_root/pagination';
import styles from './style';
export default function index() {
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

  const locationsList = locations?.map((element: any) => {
    return <ListItem type={'location'} id={element.id} title={element.name} />;
  });

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
        <ScrollView style={styles.container}>
          {locationsList}
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
