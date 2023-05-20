import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import VendorTabBar from './VendorTabBar';
import AddJourney from 'screens/Vendor/AddJourney';
export type TAuthStack = {
  home: undefined;
  addJourney: undefined;
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
      <Stack.Screen
        component={AddJourney}
        name="addJourney"
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default VendorStack;
