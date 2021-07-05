import React from 'react';
import {HomeProvider} from '../../contexts/home';
import HomeComponent from '../../components/home';

interface Props {
  navigation: any;
}
export default function Home({navigation}: Props) {
  return (
    <HomeProvider>
      <HomeComponent navigation={navigation} />
    </HomeProvider>
  );
}
