import NavigationHandler from 'navigation/index';
import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import { Provider, useSelector } from 'react-redux';
import { store } from 'redux/store';
import { toastConfig } from 'src/config/Toast';
import COLORS from 'values/colors';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import { isDate } from 'lodash';
import { selectIsDarkMode } from 'redux/DarkMode';
declare const global: { HermesInternal: null | {} };

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <NavigationHandler />
        <Toast config={toastConfig} topOffset={70} />
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;
