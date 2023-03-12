import { View, StatusBar } from 'react-native';
import React, { useEffect } from 'react';
import { styles } from './styles';
import { useAppDispatch } from 'redux/store';
import Splash from 'redux/Spalsh/SplashSlice';

const SplashScreen = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    setTimeout(() => dispatch(Splash.setIsSplashDone({})), 2500);
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
    </View>
  );
};

export default SplashScreen;
