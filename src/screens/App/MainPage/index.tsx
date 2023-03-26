import { View, Text, ImageBackground, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from './styles';

import { useDispatch, useSelector } from 'react-redux';
import Language, { selectLanguage } from 'redux/language';

import { images } from 'src/assets/images';

import Header from './Components/Header';
import InputSec from './Components/InputSec';
import AdSec from './Components/AdSec';
import CategSec from './Components/CategSec';
import BottomList from './Components/BottomList';

const MainPage = () => {
  return (
    <View style={styles.container}>
      <Header />

      <InputSec />

      <AdSec />

      <CategSec />

      <BottomList />
    </View>
  );
};

export default MainPage;
