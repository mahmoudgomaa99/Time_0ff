import { View, Animated, TouchableOpacity, Pressable } from 'react-native';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
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
import SortModel from './Components/SortModel';
import { SortJourneys } from './Components/utils/SortJourneys';
import { selectToken } from 'redux/tokens/reducer';
import { w } from 'values/Dimensions';

const MainPage = ({ route, navigation }: { route: any; navigation: any }) => {
  const isDarkMode = useSelector(selectIsDarkMode);
  const dispatch = useAppDispatch();
  const journeys = useSelector(selectCurrentJourneys);
  const isGetJourneysLoading = useLoadingSelector(
    Journeys.thunks.doGetJourneys,
  );
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState<any>({
    sort_by: '',
    sort_type: '',
  });
  const [isFilterModalVisable, setFilterModalVisable] = useState(false);
  const [isNotificationModel, setisNotificationModel] = useState(false);
  const [isFlightConfirmed, setisFlightConfirmed] = useState(false);
  const [isSortModel, setisSortModel] = useState(false);
  const [filterData, setfilterData] = useState<TInitialValues>();
  const [category, setcategory] = useState('');
  const lang = useSelector(selectLanguage);
  const [page, setpage] = useState(1);
  const [currentTab, setCurrentTab] = useState(languages[lang].main);

  const [checked, setChecked] = React.useState(0);
  const [showMenu, setShowMenu] = useState(true);
  const offsetValue = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;
  const token = useSelector(selectToken);

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
            ? {
                ...filterData,
                page: page,
                search_key_word_name: search,
                sort_by: sort?.sort_by,
                sort_type: sort?.sort_type,
              }
            : {
                category: category,
                search_key_word_name: search,
                page: page,
                sort_type: sort?.sort_type,
                sort_by: sort?.sort_by,
              },
        ),
      );
    }, [category, filterData, search, page, sort]),
  );

  useEffect(() => {
    Animated.timing(scaleValue, {
      toValue: showMenu ? 1 : 0.88,
      duration: 350,
      useNativeDriver: true,
    }).start();

    Animated.timing(offsetValue, {
      toValue: showMenu ? 0 : lang === 'en' ? w * 0.5 : -w * 0.6,
      duration: 350,
      useNativeDriver: true,
    }).start();

    Animated.timing(closeButtonOffset, {
      toValue: !showMenu ? -30 : 0,
      duration: 350,
      useNativeDriver: true,
    }).start();
  }, [showMenu, setShowMenu, scaleValue, closeButtonOffset, offsetValue]);

  const renderComponent = useMemo(
    () => (
      <>
        <DrawerNav
          setShowMenu={setShowMenu}
          setCurrentTab={setCurrentTab}
          currrentTab={currentTab}
        />
        <Animated.View
          style={[
            styles(isDarkMode).container,
            {
              transform: [{ scale: scaleValue }, { translateX: offsetValue }],
              borderRadius: !showMenu ? 35 : 0,
            },
          ]}>
          {/* <View> */}
          <View
            style={{
              flexDirection: lang === 'en' ? 'row' : 'row-reverse',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              style={styles(isDarkMode, lang).menu_icon}
              onPress={() => {
                setShowMenu(prev => !prev);
              }}
              onLongPress={() => {
                setShowMenu(prev => !prev);
              }}>
              <Svg style={{}} name="menu" size={40} />
            </TouchableOpacity>
            <Header
              isDarkMode={isDarkMode}
              lang={lang}
              isSortModel={isSortModel}
              setisSortModel={setisSortModel}
            />
          </View>
          <InputSec
            setpage={setpage}
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
            setpage={setpage}
          />
          <BottomList
            lang={lang}
            isDarkMode={isDarkMode}
            isGetJourneysLoading={isGetJourneysLoading}
            journeys={journeys}
            setisSortModel={setisSortModel}
            page={page}
            setpage={setpage}
            category={category}
          />
          <FilterModel
            isFilterModalVisable={isFilterModalVisable}
            setFilterModalVisable={setFilterModalVisable}
            isDarkMode={isDarkMode}
            setfilterData={setfilterData}
            category={category}
            setcategory={setcategory}
            search={search}
            setpage={setpage}
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
          <SortModel
            isDarkMode={isDarkMode}
            isSortModel={isSortModel}
            setisSortModel={setisSortModel}
            setSort={setSort}
            sort={sort}
            checked={checked}
            setChecked={setChecked}
          />
        </Animated.View>
      </>
    ),
    [
      isDarkMode,
      lang,
      showMenu,
      page,
      category,
      search,
      sort,
      checked,
      isFilterModalVisable,
      isNotificationModel,
      isFlightConfirmed,
      isSortModel,
      filterData,
      journeys,
      scaleValue,
      offsetValue,
      closeButtonOffset,
      currentTab,
      setCurrentTab,
    ],
  );

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.primary,
        alignItems: lang === 'en' ? 'flex-start' : 'flex-end',
        justifyContent: lang === 'en' ? 'flex-start' : 'flex-start',
      }}>
      {renderComponent}
    </View>
  );
};

export default MainPage;
