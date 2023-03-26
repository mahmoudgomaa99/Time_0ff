import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from 'src/screens/App/Home';
import DetailsTrip from 'screens/App/DetailsTrip';

import Map from 'src/screens/App/Map';
export type TAuthStack = {
  home: undefined;
  map: undefined;
  detailsTrip: undefined;
};

const Stack = createNativeStackNavigator<TAuthStack>();

const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen
        name="home"
        component={Home}
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
    </Stack.Navigator>
  );
};

export default AppStack;
