import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Top from './Component/Top';
import { useSelector } from 'react-redux';
import { selectLanguage } from 'redux/language';
import { selectIsDarkMode } from 'redux/DarkMode';
import { useAppDispatch } from 'redux/store';
import Journeys, { selectCurrentJourneys } from 'redux/journey';
import { useLoadingSelector } from 'redux/selectors';
import SkeletonItem from 'components/molecules/SkeletonItem';
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import Card from '../MainPage/Components/Card';
import { styles } from './styles';
import { h } from 'values/Dimensions';
import TextView from 'atoms/TextView';
import languages from 'values/languages';
import COLORS from 'values/colors';
import Fonts from 'values/fonts';

const SeeMore = () => {
  const lang = useSelector(selectLanguage);
  const route: any = useRoute();
  const { data } = route?.params;
  const isDarkMode = useSelector(selectIsDarkMode);
  const navigation = useNavigation<any>();
  const dispatch = useAppDispatch();
  const journeys = useSelector(selectCurrentJourneys);
  const isGetJourneysLoading = useLoadingSelector(
    Journeys.thunks.doGetJourneys,
  );
  const [page, setpage] = useState(1);

  useFocusEffect(
    useCallback(() => {
      dispatch(Journeys.thunks.doGetJourneys({ page: page, category: data }));
    }, [page]),
  );
  return (
    <SafeAreaView style={styles(lang, isDarkMode).container}>
      <Top lang={lang} isDarkMode={isDarkMode} />
      <View style={{ paddingTop: 0 }}>
        {isGetJourneysLoading && page === 1 ? (
          [...Array(5)].map(i => (
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
                  style={{
                    color: isDarkMode ? COLORS.white : COLORS.black,
                    fontFamily: Fonts.Cairo_SemiBold,
                  }}
                />
              </View>
            ) : (
              <>
                <FlatList
                  onEndReached={() => {
                    setpage((prev: number) => prev + 1);
                  }}
                  contentContainerStyle={{ paddingBottom: h * 0.2 }}
                  data={journeys}
                  keyExtractor={(item, index): any => index.toString()}
                  renderItem={({
                    item,
                    index,
                  }: {
                    item?: any;
                    index?: number;
                  }) => (
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
                        urlImage={item.images[0]}
                      />
                    </TouchableOpacity>
                  )}
                  showsVerticalScrollIndicator={true}
                />
                {isGetJourneysLoading && page !== 1 && (
                  <View
                    style={{
                      height: 50,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <ActivityIndicator
                      color={COLORS.black}
                      style={{ marginVertical: h * 0 }}
                      size={'large'}
                    />
                  </View>
                )}
              </>
            )}
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

export default SeeMore;
