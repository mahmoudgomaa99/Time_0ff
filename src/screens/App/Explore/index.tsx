import { View, Text, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
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
import TextView from 'atoms/TextView';
import languages from 'values/languages';
import { cardData } from './Components/data';
import Card from '../MainPage/Components/Card';
import { useAppDispatch } from 'redux/store';
import Journeys from 'redux/journey';
import { unwrapResult } from '@reduxjs/toolkit';

const Explore = () => {
  const dispatch = useAppDispatch();
  const lang = useSelector(selectLanguage);
  const isDarkMode = useSelector(selectIsDarkMode);
  const [isFilterModalVisable, setFilterModalVisable] = useState(false);
  useEffect(() => {
    dispatch(Journeys.thunks.doGetJourney({ id: 12 }));
  }, []);
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
      <TextView
        title={languages[lang].hotOffers}
        style={styles(lang, isDarkMode).Text}
      />
      <ScrollView>
        {cardData(lang).map((item: any) => (
          <View key={item.id}>
            <Card
              title={item.title}
              description={item.description}
              location={lang === 'ar' ? item.arabic_location : item.location}
              name={item.name}
              stars={item.stars}
              lang={lang}
              isDarkMode={isDarkMode}
              isFav={item.is_favorite}
              urlImage={
                'http://159.89.7.75:80/uploads/journeys/31/31_1681722815841_default.jpg'
              }
            />
          </View>
        ))}
      </ScrollView>

      <TextView
        title={languages[lang].discount}
        style={styles(lang, isDarkMode).Text}
      />
      <ScrollView>
        {cardData(lang).map((item: any) => (
          <Card
            title={item.title}
            description={item.description}
            location={lang === 'ar' ? item.arabic_location : item.location}
            name={item.name}
            stars={item.stars}
            lang={lang}
            isDarkMode={isDarkMode}
            isFav={item.is_favorite}
            urlImage={
              'http://159.89.7.75:80/uploads/journeys/31/31_1681722815841_default.jpg'
            }
          />
        ))}
      </ScrollView>
      {/* <BottomList isDarkMode={isDarkMode} lang={lang} /> */}
      <FilterModel
        isFilterModalVisable={isFilterModalVisable}
        setFilterModalVisable={setFilterModalVisable}
        isDarkMode={isDarkMode}
      />
    </SafeAreaView>
  );
};

export default Explore;
