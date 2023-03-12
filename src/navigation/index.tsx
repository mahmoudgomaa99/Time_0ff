import React, { useEffect, useMemo, useState } from 'react';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from 'src/redux/user';
import { selectIsSplashDone } from 'redux/Spalsh/SplashSlice';
import Splash from 'screens/Splash';
import NeedsInternetConnection from 'components/organisms/NeedsInternetConnection';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { selectIsVerefied } from '../redux/user/index';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

type TRootStack = {
  auth: undefined;
  app: undefined;
};
const RootStack = createNativeStackNavigator<TRootStack>();

const NavigationHandler = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isSplashDone = useSelector(selectIsSplashDone);
  const isVerified = useSelector(selectIsVerefied);

  const renderSwitch = useMemo(() => {
    if (!isSplashDone) return <Splash />;
    return (
      <RootStack.Navigator initialRouteName="app">
        <RootStack.Screen
          options={{ headerShown: false }}
          component={AppStack}
          name="app"
        />
        <RootStack.Screen
          component={AuthStack}
          name="auth"
          options={{ headerShown: false }}
        />
      </RootStack.Navigator>
    );
  }, [currentUser, isSplashDone, isVerified]);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <NeedsInternetConnection>{renderSwitch}</NeedsInternetConnection>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default NavigationHandler;
