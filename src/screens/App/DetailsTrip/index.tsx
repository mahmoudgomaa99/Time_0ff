import { View, Text, Image, ScrollView, ActivityIndicator } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
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
import Journeys, { selectJournies } from 'redux/journey';
import { useAppDispatch } from 'redux/store';
import RequestReceive from './Components/RequestReceive';
import { selectCurrency, selectIsDarkMode } from 'redux/DarkMode';
import { unwrapResult } from '@reduxjs/toolkit';
import SkeletonBody from './Components/SkeletonItem';
import useModalHandler from 'hooks/Modal';
import AuthModal from 'components/organisms/AuthModal';
import { selectCurrentUser } from 'redux/user';
import axios from 'axios';

const DetailsTrip = () => {
  const isDarkMode = useSelector(selectIsDarkMode);
  const user = useSelector(selectCurrentUser);
  const route = useRoute<any>();
  const { id } = route.params;
  const currency = useSelector(selectCurrency);
  const [EGPRate, setEGPRate] = useState(0);
  const { closeCustomModal, openCustomModal, CustomModal } = useModalHandler();
  const [isDetailsModalVisibal, setisDetailsModalVisibal] = useState(false);
  const [isRequestReceive, setisRequestReceive] = useState(false);
  const navigation = useNavigation<any>();
  const journies = useSelector(selectJournies);
  const lang = useSelector(selectLanguage);
  const [activeIndex, setActiveIndex] = useState(0);
  const [rating, setRating] = useState(1);
  const isGetJourneyLoading = useLoadingSelector(Journeys.thunks.doGetJourney);
  const isLoading = useLoadingSelector(Journeys.thunks.doRateJourney);
  const [isCurrncyLoading, setIsCurrncyLoading] = useState(false);

  const dispatch = useAppDispatch();
  useFocusEffect(
    useCallback(() => {
      dispatch(Journeys.thunks.doGetJourney({ id }));
    }, [id]),
  );

  const renderItem = ({ item, index }: any) => {
    return (
      <View style={styles(isDarkMode).carouselItemContainer}>
        <Image source={{ uri: item }} style={styles().carouselImage} />
      </View>
    );
  };

  isRequestReceive
    ? setTimeout(() => {
        setisRequestReceive(false);
      }, 4000)
    : null;

  useEffect(() => {
    if (currency !== 'EGP') {
      setIsCurrncyLoading(true);
      axios
        .get(
          `https://currency-conversion-and-exchange-rates.p.rapidapi.com/latest?base=${currency}`,
          {
            headers: {
              'x-rapidapi-key':
                '7a8a5507famshedd4f1a1d5d9b28p1b3cdbjsn99b3a75a67a9',
            },
          },
        )
        .then(res => {
          setEGPRate(res.data.rates.EGP);
          setIsCurrncyLoading(false);
        })
        .catch(err => {
          console.log('err', err);
          setIsCurrncyLoading(false);
        });
    }
  }, []);

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
                  if (!user) {
                    openCustomModal();
                  } else {
                    dispatch(Journeys.thunks.doAddFavourite(journies[id]?._id))
                      .then(unwrapResult)
                      .then(() => {
                        // setisFavourite(!isFavourite);
                        dispatch(
                          Journeys.thunks.doGetJourney(route.params?.id),
                        );
                      })
                      .catch(() => {});
                  }
                }}>
                <Svg
                  name="heartRed"
                  size={60}
                  bgColor={journies[id]?.is_favorite ? '#FF4646' : '#dddddd'}
                />
              </TouchableOpacity>
            </View>
            <View style={{ direction: lang === 'ar' ? 'rtl' : 'ltr' }}>
              <Carousel
                layout={'default'}
                data={journies[id]?.images}
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
                      ? journies[id]?.journey_name
                      : journies[id]?.arabic_category
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
                    title={journies[id]?.location}
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
                        id: journies[id]?.agency_id,
                      });
                    }}
                    title={journies[id]?.agency_name}
                    style={styles(isDarkMode).subTitle}
                  />
                  <Svg name="star" size={17} />
                  <TextView
                    style={{ color: isDarkMode ? COLORS.white : COLORS.black }}
                    title={`(${journies[id]?.rating})`}
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
                          ? journies[id]?.description
                          : journies[id]?.arabic_description
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
                <TextView
                  title={languages[lang].YourRating}
                  style={[
                    styles(isDarkMode).descriptionTitle,
                    {
                      textAlign: lang === 'ar' ? 'right' : 'left',
                      marginTop: 15,
                    },
                  ]}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginHorizontal: 10,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    {[1, 2, 3, 4, 5].map(i => (
                      <TouchableOpacity
                        onPress={() => {
                          setRating(i);
                        }}>
                        <Svg
                          name="star"
                          bgColor={rating >= i ? '#ffc757' : '#8e8e8e'}
                          size={25}
                        />
                      </TouchableOpacity>
                    ))}
                  </View>
                  <Button
                    label={languages[lang].Addrating}
                    onPress={() => {
                      dispatch(
                        Journeys.thunks.doRateJourney({
                          id: journies[id]?._id,
                          body: { rating: rating },
                        }),
                      );
                    }}
                    type="secondry"
                    txtStyle={{ color: COLORS.black }}
                    style={{ width: 150, paddingHorizontal: 0 }}
                    isLoading={isLoading}
                  />
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
              {isCurrncyLoading ? (
                <ActivityIndicator color={COLORS.primary} size={'large'} />
              ) : (
                <TextView
                  title={
                    currency !== 'EGP'
                      ? `${parseInt(
                          //@ts-ignore
                          Number(journies[id]?.price) / Number(EGPRate),
                        )} ${currency}`
                      : journies[id]?.price?.toString() + ' ' + currency
                  }
                  style={[
                    styles(isDarkMode).price,
                    { marginBottom: lang === 'en' ? 15 : 0 },
                  ]}
                />
              )}

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
        isRequestReceive={isRequestReceive}
        setisRequestReceive={setisRequestReceive}
        journey={journies[id]}
      />
      <RequestReceive
        lang={lang}
        isRequestReceive={isRequestReceive}
        setisRequestReceive={setisRequestReceive}
      />
      <AuthModal
        closeCustomModal={closeCustomModal}
        CustomModal={CustomModal}
        type="profile"
      />
    </View>
  );
};
export default DetailsTrip;
