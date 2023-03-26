import { View, StatusBar, ImageBackground, Image } from 'react-native';
import React, { useEffect } from 'react';
import { styles } from './styles';
import { useAppDispatch } from 'redux/store';
import Splash from 'redux/Spalsh/SplashSlice';
import { images } from 'src/assets/images';
import Animated, { SlideInDown } from 'react-native-reanimated';
import Svg from 'atoms/Svg';

const SplashScreen = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(Splash.setIsSplashDone({}));
    }, 2500);
  }, []);
  return (
    <ImageBackground
      source={images.splashBg}
      style={styles.container}>
      <Animated.View entering={SlideInDown.duration(1500)}>
        <Svg name="default" size={160} />
      </Animated.View>
    </ImageBackground>
  );
};

export default SplashScreen;
