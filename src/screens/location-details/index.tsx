import React from 'react';
import LocationDetailsComponent from '../../components/location-details';
import {LocationByIDProvider} from '../../contexts/location-by-id';
interface Props {
  route: any;
  navigation: any;
}
export default function LocationDetails({route, navigation}: Props) {
  return (
    <LocationByIDProvider id={route.params.id}>
      <LocationDetailsComponent navigation={navigation} />
    </LocationByIDProvider>
  );
}
