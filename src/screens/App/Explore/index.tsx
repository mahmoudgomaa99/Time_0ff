import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import { useSelector } from 'react-redux';
import { selectLanguage } from 'redux/language';
import Top from './Components/Top';
import InputSec from './Components/InputSec';
import FilterModel from '../MainPage/Components/FilterModel';
import CategSec from './Components/CategSec';
import BottomList from './Components/BottomList';
import { SafeAreaView } from 'react-native-safe-area-context';
import { selectIsDarkMode } from 'redux/DarkMode';

const Explore = () => {
  const lang = useSelector(selectLanguage);
  const isDarkMode = useSelector(selectIsDarkMode);
  const [isFilterModalVisable, setFilterModalVisable] = useState(false);
  return (
    <SafeAreaView style={styles(lang, isDarkMode).container}>
      <Top isDarkMode={isDarkMode} lang={lang} />
      <InputSec
        lang={lang}
        isFilterModalVisable={isFilterModalVisable}
        setFilterModalVisable={setFilterModalVisable}
        isDarkMode={isDarkMode}
      />
      <CategSec lang={lang} isDarkMode={isDarkMode} />
      <BottomList isDarkMode={isDarkMode} lang={lang} />
      <FilterModel
        isFilterModalVisable={isFilterModalVisable}
        setFilterModalVisable={setFilterModalVisable}
        isDarkMode={isDarkMode}
      />
    </SafeAreaView>
  );
};

export default Explore;
