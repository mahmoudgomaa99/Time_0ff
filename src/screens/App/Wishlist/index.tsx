import { TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import { styles } from './styles';
import Top from './Components/Top';
import { useSelector } from 'react-redux';
import { selectLanguage } from 'redux/language';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Journeys, { selectFavJourneys } from 'redux/journey';
import Card from '../MainPage/Components/Card';
import { useNavigation } from '@react-navigation/native';
import TextView from 'atoms/TextView';
import languages from 'values/languages';
import COLORS from 'values/colors';
import { h } from 'values/Dimensions';
import { useAppDispatch } from 'redux/store';
import { selectIsDarkMode } from 'redux/DarkMode';
import Fonts from 'values/fonts';
import { useLoadingSelector } from 'redux/selectors';
import SkeletonItem from 'components/molecules/SkeletonItem';

const Wishlist = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<any>();
  const lang = useSelector(selectLanguage);
  const isDarkMode = useSelector(selectIsDarkMode);
  const favourites = useSelector(selectFavJourneys);
  const isLoading = useLoadingSelector(Journeys.thunks.doGetFavJourneys);

  useEffect(() => {
    dispatch(Journeys.thunks.doGetFavJourneys({}));
  }, []);
  return (
    <SafeAreaView style={styles(lang, isDarkMode).container}>
      <Top isDarkMode={isDarkMode} lang={lang} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ marginVertical: 20, paddingBottom: 80 }}>
        {isLoading ? (
          <>
            {[...Array(5).keys()].map(i => (
              <SkeletonItem />
            ))}
          </>
        ) : (
          <>
            {favourites?.length === 0 || !Array.isArray(favourites) ? (
              <TextView
                title={languages[lang].noData}
                style={{
                  color: COLORS.grey,
                  textAlign: 'center',
                  marginTop: h * 0.3,
                  fontWeight: '500',
                  fontSize: 16,
                  fontFamily: Fonts.Cairo_SemiBold,
                }}
              />
            ) : (
              <>
                {(favourites || [])?.map(item => (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('detailsTrip', { id: item._id });
                    }}
                    style={{ marginTop: 2 }}>
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
                      stars={
                        item.rating.toString() ? item.rating.toString() : '0'
                      }
                      lang={lang}
                      isDarkMode={isDarkMode}
                      isFav={true}
                      urlImage={item.image}
                    />
                  </TouchableOpacity>
                ))}
              </>
            )}
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Wishlist;
