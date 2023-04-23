import { View, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
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

const Explore = () => {
  const dispatch = useAppDispatch();
  const lang = useSelector(selectLanguage);
  const isDarkMode = useSelector(selectIsDarkMode);
  const [isFilterModalVisable, setFilterModalVisable] = useState(false);
  const [filterData, setfilterData] = useState<TInitialValues>();
  const [category, setcategory] = useState('');

  const journeysOffers = useSelector(selectHotJourneys);
  const isGetJourneysOffers = useLoadingSelector(Journeys.thunks.doGetJourneys);
  const journeysDiscount = useSelector(selectCurrentDiscountJourneys);
  const isGetJourneysDiscount = useLoadingSelector(
    Journeys.thunks.doGetDiscountJourneys,
  );
  useEffect(() => {
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
            }
          : { category: category, rating: 4 },
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
            }
          : { category: category, discount: true },
      ),
    );
  }, [category, filterData]);
  console.log(journeysOffers, 'from explore');
  return (
    <SafeAreaView style={styles(lang, isDarkMode).container}>
      <Top isDarkMode={isDarkMode} lang={lang} />
      <InputSec
        lang={lang}
        isFilterModalVisable={isFilterModalVisable}
        setFilterModalVisable={setFilterModalVisable}
        isDarkMode={isDarkMode}
      />
      <CategSec
        lang={lang}
        isDarkMode={isDarkMode}
        setcategory={setcategory}
        setfilterData={setfilterData}
      />
      <TextView
        title={languages[lang].hotOffers}
        style={styles(lang, isDarkMode).Text}
      />
      <ScrollView
        style={{ height: journeysOffers?.length ? h * 0.5 : h * 0.1 }}>
        {journeysOffers?.length > 0 ? (
          isGetJourneysOffers ? (
            [...Array(10)].map(i => (
              <View key={i}>
                <SkeletonItem />
              </View>
            ))
          ) : (
            journeysOffers?.map((item: any) => (
              <Card
                title={
                  lang === 'ar' ? item.arabic_journey_name : item.journey_name
                }
                description={
                  lang === 'ar' ? item.arabic_description : item.description
                }
                location={lang === 'ar' ? item.arabic_location : item.location}
                name={item.agency_name}
                stars={item.rating ? item.rating : 0}
                lang={lang}
                isDarkMode={isDarkMode}
                isFav={item.is_favorite}
                urlImage={item.image}
              />
            ))
          )
        ) : (
          <TextView
            title={languages[lang].noOffers}
            style={styles(lang, isDarkMode).text}
          />
        )}
      </ScrollView>

      <TextView
        title={languages[lang].discount}
        style={styles(lang, isDarkMode).Text}
      />
      <ScrollView
        style={{ height: journeysDiscount?.length ? h * 0.5 : h * 0.1 }}>
        {journeysDiscount?.length > 0 ? (
          isGetJourneysOffers ? (
            [...Array(10)].map(i => (
              <View key={i}>
                <SkeletonItem />
              </View>
            ))
          ) : (
            journeysDiscount?.map((item: any) => (
              <Card
                title={
                  lang === 'ar' ? item.arabic_journey_name : item.journey_name
                }
                description={
                  lang === 'ar' ? item.arabic_description : item.description
                }
                location={lang === 'ar' ? item.arabic_location : item.location}
                name={item.agency_name}
                stars={item.rating ? item.rating : 0}
                lang={lang}
                isDarkMode={isDarkMode}
                isFav={item.is_favorite}
                urlImage={item.image}
              />
            ))
          )
        ) : (
          <TextView
            title={languages[lang].noOffers}
            style={styles(lang).text}
          />
        )}
      </ScrollView>
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
