import { View, Animated, TouchableOpacity } from 'react-native';
import React, { useCallback, useRef, useState } from 'react';
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
import { selectIsDarkMode } from 'redux/DarkMode';
import { TInitialValues } from './Components/FilterModel/data';
import { useFocusEffect } from '@react-navigation/native';
import DrawerNav from 'navigation/DrawerNav';
import languages from 'values/languages';
import COLORS from 'values/colors';
import Svg from 'atoms/Svg';

const MainPage = ({ route, navigation }: { route: any; navigation: any }) => {
  const isDarkMode = useSelector(selectIsDarkMode);
  const dispatch = useAppDispatch();
  const journeys = useSelector(selectCurrentJourneys);
  const isGetJourneysLoading = useLoadingSelector(
    Journeys.thunks.doGetJourneys,
  );
  const [search, setSearch] = useState('');
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

  useFocusEffect(
    useCallback(() => {
      dispatch(
        Journeys.thunks.doGetJourneys(
          filterData
            ? filterData
            : { category: category, search_key_word_name: search },
        ),
      );
    }, [category, filterData, search]),
  );
  const [currentTab, setCurrentTab] = useState(languages[lang].main);
  // To get the curretn Status of menu ...
  const [showMenu, setShowMenu] = useState(false);

  // Animated Properties...

  const offsetValue = useRef(new Animated.Value(0)).current;
  // Scale Intially must be One...
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.primary,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
      }}>
      <DrawerNav setCurrentTab={setCurrentTab} currrentTab={currentTab} />
      <Animated.View
        style={[
          styles(isDarkMode).container,
          {
            transform: [{ scale: scaleValue }, { translateX: offsetValue }],
            borderRadius: showMenu ? 35 : 0,
          },
        ]}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              // Do Actions Here....
              // Scaling the view...
              Animated.timing(scaleValue, {
                toValue: showMenu ? 1 : 0.88,
                duration: 300,
                useNativeDriver: true,
              }).start();

              Animated.timing(offsetValue, {
                // YOur Random Value...
                toValue: showMenu ? 0 : 230,
                duration: 300,
                useNativeDriver: true,
              }).start();

              Animated.timing(closeButtonOffset, {
                // YOur Random Value...
                toValue: !showMenu ? -30 : 0,
                duration: 300,
                useNativeDriver: true,
              }).start();

              setShowMenu(!showMenu);
            }}>
            <Svg
              style={{ marginLeft: -60, marginRight: 20 }}
              name="main"
              size={50}
            />
          </TouchableOpacity>
          <Header isDarkMode={isDarkMode} lang={lang} />
        </View>

        <InputSec
          lang={lang}
          isFilterModalVisable={isFilterModalVisable}
          setFilterModalVisable={setFilterModalVisable}
          isDarkMode={isDarkMode}
          setSearch={setSearch}
          search={search}
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
          search={search}
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
      </Animated.View>
    </View>
  );
};

export default MainPage;
