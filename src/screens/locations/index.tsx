import React from 'react';
import ScreenContainer from '../../components/screen-container';
import LocationsList from '../../components/locations-list';
import {LocationsProvider} from '../../contexts/locations';
interface Props {
  navigation: any;
}

export default function Locations({navigation}: Props) {
  return (
    <LocationsProvider>
      <ScreenContainer header={'Locations'}>
        <LocationsList navigation={navigation} />
      </ScreenContainer>
    </LocationsProvider>
  );
}
