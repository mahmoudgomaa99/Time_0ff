import { View, Text, Image, ScrollView } from 'react-native';
import React, { useCallback, useState } from 'react';
import { styles } from './styles';
import TextView from 'atoms/TextView';
import Svg from 'atoms/Svg';
import Button from 'components/molecules/Button';
import languages from 'values/languages';
import Carousel, { Pagination } from 'react-native-new-snap-carousel';
import { h, w } from 'values/Dimensions';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { selectLanguage } from 'redux/language/index';
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import COLORS from 'values/colors';
import DetailsModal from './Components/DetailsModal';
import { useLoadingSelector } from 'redux/selectors';
import Journeys, { selectCurrentJourney } from 'redux/journey';
import { useAppDispatch } from 'redux/store';
import RequestReceive from './Components/RequestReceive';
import { selectIsDarkMode } from 'redux/DarkMode';
import { unwrapResult } from '@reduxjs/toolkit';
import SkeletonBody from './Components/SkeletonItem';

const DetailsTrip = () => {
  const isDarkMode = useSelector(selectIsDarkMode);
  const [isDetailsModalVisibal, setisDetailsModalVisibal] = useState(false);
  const [isRequestReceive, setisRequestReceive] = useState(false);
  const navigation = useNavigation<any>();
  const journey = useSelector(selectCurrentJourney);
  const lang = useSelector(selectLanguage);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFavourite, setisFavourite] = useState(journey?.is_favorite);
  const isGetJourneyLoading = useLoadingSelector(Journeys.thunks.doGetJourney);
  const route = useRoute<any>();
  const dispatch = useAppDispatch();
  useFocusEffect(
    useCallback(() => {
      dispatch(Journeys.thunks.doGetJourney(route.params?.id));
    }, [route.params?.id]),
  );
  

  const renderItem = ({ item, index }: any) => {
    return (
      <View style={styles(isDarkMode).carouselItemContainer}>
        <Image source={{ uri: item }} style={styles().carouselImage} />
      </View>
    );
  };
 

  return (
    <View style={styles(isDarkMode).container}>
      {isGetJourneyLoading ? (
        <SkeletonBody />
      ) : (
        <>
          <View style={styles().image}>
            <View
              style={[styles().SVG, , lang === 'ar' ? styles().arabic : null]}>
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}
                style={[
                  {
                    transform: [{ rotateY: lang === 'en' ? '180deg' : '0deg' }],
                  },
                ]}>
                <Svg name="arrow" isTripDetails={true} size={60} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  dispatch(Journeys.thunks.doAddFavourite(journey?._id))
                    .then(unwrapResult)
                    .then(() => {
                      setisFavourite(!isFavourite);
                    })
                    .catch(() => {});
                }}>
                <Svg
                  name="heartRed"
                  size={60}
                  bgColor={isFavourite ? '#FF4646' : '#dddddd'}
                />
              </TouchableOpacity>
            </View>
            <View style={{ direction: lang === 'ar' ? 'rtl' : 'ltr' }}>
              <Carousel
                layout={'default'}
                data={journey?.images}
                sliderWidth={w}
                itemWidth={w}
                renderItem={renderItem}
                onSnapToItem={(index: number) => setActiveIndex(index)}
              />
            </View>
            <Pagination
              dotsLength={3}
              activeDotIndex={activeIndex}
              containerStyle={[
                styles().paginationContainer,
                { direction: lang === 'ar' ? 'rtl' : 'ltr' },
              ]}
              dotStyle={styles().paginationDot}
              inactiveDotStyle={styles().paginationInactiveDot}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
            />
          </View>
          <View style={{ height: h * 0.42 }}>
            <ScrollView
              style={{ flex: 1 }}
              contentContainerStyle={{ paddingBottom: h * 0.07 }}>
              <View style={styles().text}>
                <TextView
                  title={
                    lang === 'en'
                      ? journey?.journey_name
                      : journey?.arabic_category
                  }
                  style={[
                    styles(isDarkMode).title,
                    { textAlign: lang === 'ar' ? 'right' : 'left' },
                  ]}
                />
                <View
                  style={{
                    marginBottom: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Svg name="location" size={19} />
                  <TextView
                    title={journey?.location}
                    style={[
                      styles(isDarkMode).subTitle,
                      { marginHorizontal: 1 },
                    ]}
                  />
                </View>
                <View
                  style={[
                    styles().svgAndStar,
                    lang === 'ar' ? styles().arabic : null,
                  ]}>
                  <Svg name="smile" />
                  <TextView
                    onPress={() => {
                      navigation.navigate('providerProfile', {
                        id: journey?.agency_id,
                      });
                    }}
                    title={journey?.agency_name}
                    style={styles(isDarkMode).subTitle}
                  />
                  <Svg name="star" size={17} />
                  <TextView
                    style={{ color: isDarkMode ? COLORS.white : COLORS.black }}
                    title={`(${journey?.rating})`}
                  />
                </View>

                <View>
                  <TextView
                    title={languages[lang].description}
                    style={[
                      styles(isDarkMode).descriptionTitle,
                      { textAlign: lang === 'ar' ? 'right' : 'left' },
                    ]}
                  />
                  <Text style={{ textAlign: lang === 'ar' ? 'right' : 'left' }}>
                    <TextView
                      style={styles(isDarkMode).descriptionText}
                      title={
                        lang === 'en'
                          ? journey?.description
                          : journey?.arabic_description
                      }
                    />
                  </Text>
                </View>
                <View>
                  <TextView
                    title={languages[lang].termCondition}
                    style={[
                      styles(isDarkMode).descriptionTitle,
                      {
                        textAlign: lang === 'ar' ? 'right' : 'left',
                        marginTop: 15,
                      },
                    ]}
                  />
                  <Text
                    style={{
                      textAlign: lang === 'ar' ? 'right' : 'left',
                      maxHeight: 70,
                    }}>
                    <TextView
                      style={[
                        styles(isDarkMode).descriptionText,
                        { maxHeight: 20 },
                      ]}
                      title={languages[lang].lorem}
                    />
                  </Text>
                </View>
              </View>
            </ScrollView>
          </View>

          <View
            style={[
              styles().bottom,
              lang === 'ar' ? styles().arabic : styles().arabic,
            ]}>
            <View
              style={[
                styles().bottomSec,
                { flexDirection: lang === 'ar' ? 'row-reverse' : 'row' },
              ]}>
              <TextView
                title={`${journey?.price} ${languages[lang].le}`}
                style={[
                  styles(isDarkMode).price,
                  { marginBottom: lang === 'en' ? 15 : 0 },
                ]}
              />
              <Button
                type="book"
                label={languages[lang].bookNow}
                txtStyle={styles().btn_text}
                onPress={() => {
                  setisDetailsModalVisibal(true);
                }}
              />
            </View>
          </View>
        </>
      )}

      <DetailsModal
        isDetailsModalVisibal={isDetailsModalVisibal}
        setisDetailsModalVisibal={setisDetailsModalVisibal}
        isDarkMode={isDarkMode}
      />
      <RequestReceive
        lang={lang}
        isRequestReceive={isRequestReceive}
        setisRequestReceive={setisRequestReceive}
      />
    </View>
  );
};

export default DetailsTrip;
