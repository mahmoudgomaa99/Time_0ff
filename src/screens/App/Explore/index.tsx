import {
  View,
  ScrollView,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { styles } from './styles';
import { useSelector } from 'react-redux';
import { selectLanguage } from 'redux/language';
import Top from './Components/Top';
import InputSec from './Components/InputSec';
import FilterModel from '../MainPage/Components/FilterModel';
import CategSec from './Components/CategSec';
import { SafeAreaView } from 'react-native-safe-area-context';
import { selectIsDarkMode } from 'redux/DarkMode';
import TextView from 'atoms/TextView';
import languages from 'values/languages';
import Card from '../MainPage/Components/Card';
import { TInitialValues } from '../MainPage/Components/FilterModel/data';
import Journeys, {
  selectCurrentDiscountJourneys,
  selectCurrentJourneys,
  selectHotJourneys,
} from 'redux/journey';
import { useLoadingSelector } from 'redux/selectors';
import { useAppDispatch } from 'redux/store';
import { h } from 'values/Dimensions';
import SkeletonItem from 'components/molecules/SkeletonItem';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import COLORS from 'values/colors';

const Explore = () => {
  const dispatch = useAppDispatch();
  const lang = useSelector(selectLanguage);
  const navigation = useNavigation<any>();
  const isDarkMode = useSelector(selectIsDarkMode);
  const [isFilterModalVisable, setFilterModalVisable] = useState(false);
  const [filterData, setfilterData] = useState<TInitialValues>();
  const [category, setcategory] = useState('');
  const [search, setSearch] = useState('');
  const journeysOffers = useSelector(selectHotJourneys);
  const isGetJourneysOffers = useLoadingSelector(Journeys.thunks.doGetJourneys);
  const journeysDiscount = useSelector(selectCurrentDiscountJourneys);
  const isGetJourneysDiscount = useLoadingSelector(
    Journeys.thunks.doGetDiscountJourneys,
  );
  const [page, setpage] = useState(1);
  useFocusEffect(
    useCallback(() => {
      dispatch(
        Journeys.thunks.doGetHotJourneys(
          filterData
            ? {
                category: filterData.category,
                start_date: filterData.start_date,
                location: filterData.location,
                price_start: filterData.price_start,
                price_end: filterData.price_end,
                rating: 4,
                search_key_word_name: search,
                page: page,
              }
            : {
                category: category,
                rating: 4,
                search_key_word_name: search,
                page: page,
              },
        ),
      );
      dispatch(
        Journeys.thunks.doGetDiscountJourneys(
          filterData
            ? {
                category: filterData.category,
                start_date: filterData.start_date,
                location: filterData.location,
                price_start: filterData.price_start,
                price_end: filterData.price_end,
                discount: true,
                search_key_word_name: search,
              }
            : {
                category: category,
                discount: true,
                search_key_word_name: search,
              },
        ),
      );
    }, [category, filterData, search, page]),
  );
  console.log(page, 'this is the page');
  console.log(journeysOffers);

  return (
    <SafeAreaView style={styles(lang, isDarkMode).container}>
      <Top isDarkMode={isDarkMode} lang={lang} />
      <InputSec
        lang={lang}
        isFilterModalVisable={isFilterModalVisable}
        setFilterModalVisable={setFilterModalVisable}
        isDarkMode={isDarkMode}
        setSearch={setSearch}
        search={search}
      />
      <CategSec
        lang={lang}
        isDarkMode={isDarkMode}
        setcategory={setcategory}
        setfilterData={setfilterData}
      />
      <TextView
        title={languages[lang].whathot}
        style={styles(lang, isDarkMode).Text}
      />
      <View style={{ height: journeysOffers?.length ? h * 0.2 : h * 0.1 }}>
        {journeysOffers?.length > 0 ? (
          isGetJourneysOffers ? (
            [...Array(10)].map(i => (
              <View key={i}>
                <SkeletonItem />
              </View>
            ))
          ) : (
            <>
              <FlatList
                onEndReached={() => {
                  setpage((prev: number) => prev + 1);
                }}
                data={journeysOffers}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('detailsTrip', { id: item._id });
                    }}>
                    <Card
                      title={
                        lang === 'ar'
                          ? item.arabic_journey_name
                          : item.journey_name
                      }
                      description={
                        lang === 'ar'
                          ? item.arabic_description
                          : item.description
                      }
                      location={
                        lang === 'ar' ? item.arabic_location : item.location
                      }
                      name={item.agency_name}
                      stars={item.rating ? item.rating : 0}
                      lang={lang}
                      isDarkMode={isDarkMode}
                      isFav={item.is_favorite}
                      urlImage={item.image}
                    />
                  </TouchableOpacity>
                )}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => item.id}
              />
              {isGetJourneysOffers && page !== 1 && (
                <View style={{ marginBottom: 10 }}>
                  <ActivityIndicator size="large" color={COLORS.primary} />
                </View>
              )}
            </>
            // journeysOffers?.map((item: any, index) => (
            //   <TouchableOpacity
            //     key={index}
            //     onPress={() => {
            //       navigation.navigate('detailsTrip', { id: item._id });
            //     }}>
            //     <Card
            //       title={
            //         lang === 'ar' ? item.arabic_journey_name : item.journey_name
            //       }
            //       description={
            //         lang === 'ar' ? item.arabic_description : item.description
            //       }
            //       location={
            //         lang === 'ar' ? item.arabic_location : item.location
            //       }
            //       name={item.agency_name}
            //       stars={item.rating ? item.rating : 0}
            //       lang={lang}
            //       isDarkMode={isDarkMode}
            //       isFav={item.is_favorite}
            //       urlImage={item.image}
            //     />
            //   </TouchableOpacity>
            // ))
          )
        ) : (
          <TextView
            title={languages[lang].noData}
            style={styles(lang, isDarkMode).text}
          />
        )}
      </View>

      {/* <BottomList isDarkMode={isDarkMode} lang={lang} /> */}
      <FilterModel
        isFilterModalVisable={isFilterModalVisable}
        setFilterModalVisable={setFilterModalVisable}
        isDarkMode={isDarkMode}
        setfilterData={setfilterData}
        setcategory={setcategory}
        category={category}
      />
    </SafeAreaView>
  );
};

export default Explore;
