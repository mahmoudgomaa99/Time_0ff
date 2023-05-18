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
import ContactUs from 'screens/App/ContactUs';
import Notification from 'screens/App/Notification';
import Settings from 'screens/App/Settings';
import SeeMore from 'screens/App/SeeMore';
import VendorTabBar from './VendorTabBar';
export type TAuthStack = {
  home: undefined;
  map: undefined;
  detailsTrip: undefined;
  providerProfile: undefined;
  editProfile: undefined;
  myBookings: undefined;
  wishlist: undefined;
  contactUs: undefined;
  notification: undefined;
  settings: undefined;
  seeMore: undefined;
};

const Stack = createNativeStackNavigator<TAuthStack>();

const VendorStack = () => {
  return (
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen
        name="home"
        component={VendorTabBar}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default VendorStack;
