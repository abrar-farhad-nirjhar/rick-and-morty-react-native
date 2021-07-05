import {useRoute} from '@react-navigation/core';
import React from 'react';
import LocationDetailsComponent from '../../components/location-details';
import {LocationByIDProvider} from '../../contexts/location-by-id';

export default function LocationDetails() {
  const route: any = useRoute();
  return (
    <LocationByIDProvider id={route.params.id}>
      <LocationDetailsComponent />
    </LocationByIDProvider>
  );
}
