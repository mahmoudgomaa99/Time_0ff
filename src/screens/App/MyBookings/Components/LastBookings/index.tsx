import { View, Text, ScrollView } from 'react-native';
import React, { useCallback } from 'react';
import TextView from 'atoms/TextView';
import languages from 'values/languages';
import { styles } from './styles';
import { Data } from './data';
import Svg from 'atoms/Svg';
import { h } from 'values/Dimensions';
import { color } from 'react-native-reanimated';
import { useAppDispatch } from 'redux/store';
import { useSelector } from 'react-redux';
import Journeys, { selectCurrentAllBookings } from 'redux/journey';
import { selectCurrentUser } from 'redux/user';
import { useLoadingSelector } from 'redux/selectors';
import { useFocusEffect } from '@react-navigation/native';

const LastBookings = ({
  lang,
  isDarkMode,
}: {
  lang: string;
  isDarkMode?: boolean;
}) => {
  const dispatch = useAppDispatch();
  const Allbookings = useSelector(selectCurrentAllBookings);
  const currentUser = useSelector(selectCurrentUser);
  const isGetAllBookingsLoading = useLoadingSelector(
    Journeys.thunks.doGetAllBookings,
  );

  useFocusEffect(
    useCallback(() => {
      dispatch(Journeys.thunks.doGetAllBookings(15));
    }, []),
  );

  console.log(Allbookings, 'all bookings');
  console.log(currentUser);
  return (
    <View style={{ paddingHorizontal: 15 }}>
      <TextView
        title={languages[lang].lastBooking}
        style={styles(lang, 'f', isDarkMode).title}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: h * 0.2 }}>
        {Allbookings.map((value: any) => (
          <View style={styles(lang).container}>
            <View
              style={{
                marginLeft: lang === 'en' ? -10 : 0,
                marginRight: lang === 'ar' ? -10 : 0,
              }}>
              <Svg name="cube" size={60} />
            </View>
            <View>
              <TextView
                title={value.category}
                style={styles(lang, value.color, isDarkMode).text}
              />
              <View style={styles(lang).innerContainer}>
                <TextView
                  title={value.createdAt.substring(0, 10)}
                  style={styles(lang).date}
                />
                <View style={styles(lang).circleContainer}>
                  <View
                    style={
                      styles(
                        lang,
                        value.status === 'confirmed'
                          ? '#B5E633'
                          : value.status === 'cancelled'
                          ? '#f91e1e'
                          : value.status === 'pending'
                          ? '#ECE634'
                          : value.status === 'rejected'
                          ? '#FF7B7B'
                          : '#000',
                      ).circle
                    }></View>
                  <TextView
                    title={value.status}
                    style={
                      styles(
                        lang,
                        value.status === 'confirmed'
                          ? '#B5E633'
                          : value.status === 'cancelled'
                          ? '#f91e1e'
                          : value.status === 'pending'
                          ? '#ECE634'
                          : value.status === 'rejected'
                          ? '#FF7B7B'
                          : '#000',
                      ).statusText
                    }
                  />
                </View>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default LastBookings;
