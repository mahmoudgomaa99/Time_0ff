import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from 'src/screens/App/Home';
import DetailsTrip from 'screens/App/DetailsTrip';

import Map from 'src/screens/App/Map';
import ProviderProfile from 'screens/App/ProviderProfile';
import TabBar from './TabBar';
import EditProfile from 'screens/App/EditProfile';
import MyBookings from 'screens/App/MyBookings';
import Wishlist from 'screens/App/Wishlist';
export type TAuthStack = {
  home: undefined;
  map: undefined;
  detailsTrip: undefined;
  providerProfile: undefined;
  editProfile:undefined,
  myBookings:undefined,
  wishlist:undefined
};

const Stack = createNativeStackNavigator<TAuthStack>();

const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen
        name="home"
        component={TabBar}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="detailsTrip"
        component={DetailsTrip}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="map"
        component={Map}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="providerProfile"
        component={ProviderProfile}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="editProfile"
        component={EditProfile}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="myBookings"
        component={MyBookings}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="wishlist"
        component={Wishlist}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
