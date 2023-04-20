import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Top from './Component/Top';
import { useSelector } from 'react-redux';
import { selectLanguage } from 'redux/language';
import { selectIsDarkMode } from 'redux/DarkMode';
import { useAppDispatch } from 'redux/store';
import Journeys, { selectCurrentJourneys } from 'redux/journey';
import { useLoadingSelector } from 'redux/selectors';
import SkeletonItem from 'components/molecules/SkeletonItem';
import { useNavigation } from '@react-navigation/native';
import Card from '../MainPage/Components/Card';
import { styles } from './styles';
import { h } from 'values/Dimensions';
import TextView from 'atoms/TextView';
import languages from 'values/languages';
import COLORS from 'values/colors';

const SeeMore = () => {
  const lang = useSelector(selectLanguage);
  const isDarkMode = useSelector(selectIsDarkMode);
  const navigation = useNavigation<any>();
  const dispatch = useAppDispatch();
  const journeys = useSelector(selectCurrentJourneys);
  const isGetJourneysLoading = useLoadingSelector(
    Journeys.thunks.doGetJourneys,
  );

  useEffect(() => {
    dispatch(Journeys.thunks.doGetJourneys({}));
  }, []);
  console.log(journeys, 'llll');

  return (
    <SafeAreaView style={styles(lang, isDarkMode).container}>
      <Top lang={lang} isDarkMode={isDarkMode} />
      <View style={{ paddingTop: 0 }}>
        {isGetJourneysLoading ? (
          [...Array(20)].map(i => (
            <View key={i}>
              <SkeletonItem />
            </View>
          ))
        ) : (
          <>
            {journeys?.length === 0 ? (
              <View style={styles(lang, isDarkMode).body}>
                <TextView
                  title={languages[lang].noData}
                  style={{ color: isDarkMode ? COLORS.white : COLORS.black }}
                />
              </View>
            ) : (
              <FlatList
                contentContainerStyle={{ paddingBottom: h * 0.2 }}
                data={journeys}
                renderItem={(item?: any) => (
                  <TouchableOpacity
                    key={item?.id}
                    onPress={() => {
                      navigation.navigate('detailsTrip', { id: item?._id });
                    }}
                    style={{ marginTop: 2 }}>
                    <Card
                      title={
                        lang === 'ar'
                          ? item?.arabic_journey_name
                          : item?.journey_name
                      }
                      description={
                        lang === 'ar'
                          ? item.arabic_description
                          : item.description
                      }
                      location={
                        lang === 'ar' ? item.arabic_location : item.location
                      }
                      name={item?.agency_name}
                      stars={item.rating ? item.rating : 0}
                      lang={lang}
                      isDarkMode={isDarkMode}
                      isFav={item.is_favorite}
                      urlImage={item.image}
                    />
                  </TouchableOpacity>
                )}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item): any => item?.id}
              />
            )}
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

export default SeeMore;
