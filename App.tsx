import NavigationHandler from 'navigation/index';
import React, { useEffect, useRef } from 'react';
import { Alert } from 'react-native';
import Toast from 'react-native-toast-message';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import { toastConfig } from 'src/config/Toast';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import messaging from '@react-native-firebase/messaging';
import NotificationPopup from 'react-native-push-notification-popup';
import { images } from 'src/assets/images';

declare const global: { HermesInternal: null | {} };

const App = () => {
  const notefRef: any = useRef<NotificationPopup>(null);
  useEffect(() => {
    messaging().setBackgroundMessageHandler(async remoteMessage => {});
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log(remoteMessage, 'remoteMessage');
      notefRef.current?.show({
        appIconSource: images.logo,
        appIconColor: '#004dcf',
        appTitle: 'Time Off',
        timeText: 'Now',
        title: remoteMessage.notification?.title,
        body: remoteMessage.notification?.body,
        slideOutTime: 5000,
      });
    });
    return unsubscribe;
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <NavigationHandler />
        <Toast config={toastConfig} topOffset={70} />
        <NotificationPopup ref={notefRef} />
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;
