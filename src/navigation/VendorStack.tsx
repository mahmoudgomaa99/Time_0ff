import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import VendorTabBar from './VendorTabBar';
import AddJourney from 'screens/Vendor/AddJourney';
import JourneyDetails from 'screens/Vendor/JourneyDetails';
import UpdateAvailabilitey from 'screens/Vendor/UpdateAvailabilitey/UpdateAvailabilitey';
export type TAuthStack = {
  home: undefined;
  addJourney: undefined;
  journeyDetails: undefined;
  updateAvailabilitey: undefined;
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
      <Stack.Screen
        component={JourneyDetails}
        options={{ headerShown: false }}
        name="journeyDetails"
      />
      <Stack.Screen
        component={UpdateAvailabilitey}
        name="updateAvailabilitey"
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default VendorStack;
