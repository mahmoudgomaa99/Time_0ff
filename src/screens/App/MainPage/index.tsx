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
import NotificationModel from './Components/NotificationModel';
import FlightConfirmedModel from './Components/FlightConfirmedModel';
import { useAppDispatch } from 'redux/store';
import { useLoadingSelector } from 'redux/selectors';
import Journeys, { selectCurrentJourneys } from 'redux/journey';
import { unwrapResult } from '@reduxjs/toolkit';
import { selectIsDarkMode } from 'redux/DarkMode';
import { TInitialValues } from './Components/FilterModel/data';

const MainPage = ({ route, navigation }: { route: any; navigation: any }) => {
  const isDarkMode = useSelector(selectIsDarkMode);
  const dispatch = useAppDispatch();
  const journeys = useSelector(selectCurrentJourneys);
  const isGetJourneysLoading = useLoadingSelector(
    Journeys.thunks.doGetJourneys,
  );
  const [isFilterModalVisable, setFilterModalVisable] = useState(false);
  const [isNotificationModel, setisNotificationModel] = useState(false);
  const [isFlightConfirmed, setisFlightConfirmed] = useState(false);
  const [filterData, setfilterData] = useState<TInitialValues>();
  const [category, setcategory] = useState('');
  const lang = useSelector(selectLanguage);
  if (route.params?.modal) {
    setTimeout(() => {
      setisFlightConfirmed(true);
      navigation.setParams({
        modal: undefined,
      });
    }, 100);
  }

  useEffect(() => {
    dispatch(
      Journeys.thunks.doGetJourneys(
        filterData ? filterData : { category: category },
      ),
    );
  }, [category, filterData]);

  return (
    <View style={styles(isDarkMode).container}>
      <Header isDarkMode={isDarkMode} lang={lang} />
      <InputSec
        lang={lang}
        isFilterModalVisable={isFilterModalVisable}
        setFilterModalVisable={setFilterModalVisable}
        isDarkMode={isDarkMode}
      />
      <AdSec isDarkMode={isDarkMode} lang={lang} />
      <CategSec
        isDarkMode={isDarkMode}
        lang={lang}
        setcategory={setcategory}
        setfilterData={setfilterData}
      />
      <BottomList
        lang={lang}
        isDarkMode={isDarkMode}
        isGetJourneysLoading={isGetJourneysLoading}
        journeys={journeys}
      />
      <FilterModel
        isFilterModalVisable={isFilterModalVisable}
        setFilterModalVisable={setFilterModalVisable}
        isDarkMode={isDarkMode}
        setfilterData={setfilterData}
        category={category}
        setcategory={setcategory}
      />
      <NotificationModel
        lang={lang}
        isNotificationModel={isNotificationModel}
        setisNotificationModel={setisNotificationModel}
      />
      <FlightConfirmedModel
        lang={lang}
        isFlightConfirmed={isFlightConfirmed}
        setisFlightConfirmed={setisFlightConfirmed}
      />
    </View>
  );
};

export default MainPage;
