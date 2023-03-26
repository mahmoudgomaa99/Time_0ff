import { View } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { useSelector } from 'react-redux';
import { selectLanguage } from 'redux/language';
import Header from './Components/Header';
import InputSec from './Components/InputSec';
import AdSec from './Components/AdSec';
import CategSec from './Components/CategSec';
import BottomList from './Components/BottomList';

const MainPage = () => {
  const lang = useSelector(selectLanguage);

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
