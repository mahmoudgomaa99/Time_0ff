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

const MainPage = ({ route, navigation }: { route: any; navigation: any }) => {
  const [isFilterModalVisable, setFilterModalVisable] = useState(false);
  const [isNotificationModel, setisNotificationModel] = useState(false);
  const [isFlightConfirmed, setisFlightConfirmed] = useState(false);
  const lang = useSelector(selectLanguage);
  if (route.params?.modal) {
    setTimeout(() => {
      setisFlightConfirmed(true);
      navigation.setParams({
        modal: undefined,
      });
    }, 100);
  }

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
