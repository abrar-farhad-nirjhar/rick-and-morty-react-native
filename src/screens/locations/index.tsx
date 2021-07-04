import React from 'react';
import ScreenContainer from '../../components/screen-container';
import LocationsList from '../../components/locations-list';
import {LocationsProvider} from '../../contexts/locations';
export default function Locations() {
  return (
    <LocationsProvider>
      <ScreenContainer header={'Locations'}>
        <LocationsList />
      </ScreenContainer>
    </LocationsProvider>
  );
}
