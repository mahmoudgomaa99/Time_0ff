import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import { useSelector } from 'react-redux';
import { selectLanguage } from 'redux/language';
import Top from './Components/Top';
import InputSec from './Components/InputSec';
import FilterModel from './Components/FilterModel';
import CategSec from './Components/CategSec';
import BottomList from './Components/BottomList';

const Explore = () => {
  const lang = useSelector(selectLanguage);
  const [isFilterModalVisable, setFilterModalVisable] = useState(false);
  return (
    <View style={styles(lang).container}>
      <Top lang={lang} />
      <InputSec
        lang={lang}
        isFilterModalVisable={isFilterModalVisable}
        setFilterModalVisable={setFilterModalVisable}
      />
      <CategSec lang={lang} />
      <BottomList lang={lang} />
      <FilterModel
        isFilterModalVisable={isFilterModalVisable}
        setFilterModalVisable={setFilterModalVisable}
      />
    </View>
  );
};

export default Explore;
