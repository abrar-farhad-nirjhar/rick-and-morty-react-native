import React from 'react';
import {HomeProvider} from '../../contexts/home';
import HomeComponent from '../../components/home';

export default function Home() {
  return (
    <HomeProvider>
      <HomeComponent />
    </HomeProvider>
  );
}
