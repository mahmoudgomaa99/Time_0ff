import {
  View,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import Card from '../Card';
import TextView from 'atoms/TextView';
import languages from 'values/languages';
import { styles } from './styles';
import { h } from 'values/Dimensions';
import { useNavigation } from '@react-navigation/native';
import SkeletonItem from 'components/molecules/SkeletonItem';
import Svg from 'atoms/Svg';
import { number } from 'yup';
import COLORS from 'values/colors';

const BottomList = ({
  lang,
  isDarkMode,
  isGetJourneysLoading,
  journeys,
  setisSortModel,
  page,
  setpage,
  category,
}: {
  isDarkMode?: boolean;
  lang: string;
  isGetJourneysLoading: boolean;
  journeys: any;
  setisSortModel?: any;
  page: number;
  setpage: any;
  category: string;
}) => {
  const navigation = useNavigation<any>();
  // console.log(journeys, 'journeys');

  return (
    <View style={{ flex: 1, paddingBottom: h * 0.07 }}>
      <View style={{ marginHorizontal: 15 }}>
        <View style={[styles(lang).experiences]}>
          <TextView
            title={languages[lang].activity}
            style={styles(lang, isDarkMode).experiencesText}
          />
          <TouchableOpacity
            onPress={() => {
              setisSortModel(true);
            }}>
            <Svg
              name="sort"
              bgColor={isDarkMode ? COLORS.white : COLORS.black}
              size={40}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ paddingTop: 0 }}>
        {isGetJourneysLoading && page === 1 ? (
          [...Array(5)].map(i => (
            <View key={i}>
              <SkeletonItem />
            </View>
          ))
        ) : (
          <>
            {journeys?.length !== 0 ? (
              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  marginHorizontal: 10,
                }}>
                {journeys?.map((item: any, index: number) => (
                  <View
                    key={item?._id}
                    style={{
                      width: '48%',
                      borderRadius: 15,
                      overflow: 'hidden',
                    }}>
                    <TouchableOpacity
                      onPress={() => {
                        setpage(1);
                        navigation.navigate('detailsTrip', { id: item?._id });
                      }}
                      style={{
                        marginTop: 2,
                        borderRadius: 15,
                        overflow: 'hidden',
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
                        isFav={item?.is_favorite || false}
                        urlImage={item.images[0]}
                      />
                    </TouchableOpacity>
                  </View>
                ))}
                {isGetJourneysLoading && page !== 1 && (
                  <View style={{ marginBottom: h * 0.1 }}>
                    <ActivityIndicator size="large" color={COLORS.primary} />
                  </View>
                )}
              </View>
            ) : (
              <TextView
                title={languages[lang].noData}
                style={styles(lang, isDarkMode).text}
              />
            )}
          </>
        )}
      </View>
    </View>
  );
};

export default BottomList;
