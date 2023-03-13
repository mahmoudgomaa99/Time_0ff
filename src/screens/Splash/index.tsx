import { View, StatusBar, ImageBackground, Image } from 'react-native';
import React, { useEffect } from 'react';
import { styles } from './styles';
import { useAppDispatch } from 'redux/store';
import Splash from 'redux/Spalsh/SplashSlice';
import { images } from 'src/assets/images';
import Animated, { SlideInDown } from 'react-native-reanimated';
import Present from 'redux/Presenting';

const SplashScreen = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(Splash.setIsSplashDone({}));
    }, 2500);
  }, []);
  return (
    <ImageBackground source={images.test} style={styles.container}>
      <StatusBar hidden={true} />
      <Animated.View entering={SlideInDown.duration(2000)}>
        <Image source={images.logo} style={{ width: 200, height: 200 }} />
      </Animated.View>
    </ImageBackground>
  );
};

export default SplashScreen;
