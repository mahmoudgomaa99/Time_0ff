import React, { useEffect, useMemo } from 'react';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from 'src/redux/user';
import { selectIsSplashDone } from 'redux/Spalsh/SplashSlice';
import Splash from 'screens/PreApp/Splash';
import NeedsInternetConnection from 'components/organisms/NeedsInternetConnection';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { selectIsPresenting } from 'redux/Presenting';
import PresentingScreen from 'screens/PreApp/Presenting';
import Geolocation from '@react-native-community/geolocation';
import Location from 'redux/Location';
import { useAppDispatch } from '../redux/store';
import { StatusBar } from 'react-native';
import COLORS from 'values/colors';
import { selectIsDarkMode } from 'redux/DarkMode';
import { UserType, selectUserType } from 'redux/UserType';
import ChooseType from 'screens/PreApp/ChooseType';
import VendorStack from './VendorStack';

type TRootStack = {
  auth: undefined;
  app: undefined;
  vendor: undefined;
};
const RootStack = createNativeStackNavigator<TRootStack>();

const NavigationHandler = () => {
  const dispatch = useAppDispatch();
  const isDarkMode = useSelector(selectIsDarkMode);
  const currentUser = useSelector(selectCurrentUser);
  const isSplashDone = useSelector(selectIsSplashDone);
  const isPresent = useSelector(selectIsPresenting);
  const userType = useSelector(selectUserType);

  useEffect(() => {
    Geolocation.getCurrentPosition(i => {
      dispatch(
        Location.setLocation({
          location: { lat: i.coords.latitude, lang: i.coords.longitude },
        }),
      );
    });
  }, []);

  const renderSwitch = useMemo(() => {
    if (!isSplashDone) return <Splash />;
    if (isPresent) return <PresentingScreen />;
    return (
      <RootStack.Navigator
        initialRouteName={
          currentUser ? (userType === 'user' ? 'app' : 'vendor') : 'auth'
        }>
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
        <RootStack.Screen
          component={VendorStack}
          name="vendor"
          options={{ headerShown: false }}
        />
      </RootStack.Navigator>
    );
  }, [currentUser, isSplashDone, isPresent, userType]);

  return (
    <>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkMode ? COLORS.darkMode : COLORS.white}
      />
      <SafeAreaProvider>
        <NavigationContainer>
          <NeedsInternetConnection>{renderSwitch}</NeedsInternetConnection>
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
};

export default NavigationHandler;
