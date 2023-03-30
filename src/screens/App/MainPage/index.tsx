import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { styles } from './styles';

import Header from './Components/Header';
import InputSec from './Components/InputSec';
import AdSec from './Components/AdSec';
import CategSec from './Components/CategSec';
import BottomList from './Components/BottomList';
import FilterModel from './Components/FilterModel';
import { useSelector } from 'react-redux';
import { selectLanguage } from 'redux/language';

const MainPage = () => {
  const [isFilterModalVisable, setFilterModalVisable] = useState(false);
  const lang = useSelector(selectLanguage);
  return (
    <View style={styles.container}>
      <Header lang={lang} />
      <InputSec
        lang={lang}
        isFilterModalVisable={isFilterModalVisable}
        setFilterModalVisable={setFilterModalVisable}
      />
      <AdSec lang={lang} />
      <CategSec lang={lang} />
      <BottomList lang={lang} />
      <FilterModel
        isFilterModalVisable={isFilterModalVisable}
        setFilterModalVisable={setFilterModalVisable}
      />
    </View>
  );
};

export default MainPage;
