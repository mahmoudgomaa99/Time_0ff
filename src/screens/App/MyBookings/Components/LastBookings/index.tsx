import {
  View,
  Text,
  ScrollView,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React, { useCallback, useState } from 'react';
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
import COLORS from 'values/colors';
import SkeletonItem from 'components/molecules/SkeletonItem';

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
  const [page, setpage] = useState(1);

  useFocusEffect(
    useCallback(() => {
      dispatch(
        Journeys.thunks.doGetAllBookings({ id: currentUser._id, page: page }),
      );
    }, [page]),
  );

  // console.log(Allbookings, 'all bookings');
  console.log(currentUser);
  // console.log(page, 'this is');
  // console.log(isGetAllBookingsLoading, 'sdsdsds');
  console.log(Allbookings, 'jhohioholjok');

  return (
    <View style={{ paddingHorizontal: 15 }}>
      <TextView
        title={languages[lang].lastBooking}
        style={styles(lang, 'f', isDarkMode).title}
      />
      {Allbookings.length > 0 ? (
        isGetAllBookingsLoading && page === 1 ? (
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
              data={Allbookings}
              renderItem={({ item }) => (
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
                      title={item.category}
                      style={styles(lang, item.color, isDarkMode).text}
                    />
                    <View style={styles(lang).innerContainer}>
                      <TextView
                        title={item.createdAt.substring(0, 10)}
                        style={styles(lang).date}
                      />
                      <View style={styles(lang).circleContainer}>
                        <View
                          style={
                            styles(
                              lang,
                              item.status === 'confirmed'
                                ? '#B5E633'
                                : item.status === 'cancelled'
                                ? '#f91e1e'
                                : item.status === 'pending'
                                ? '#ECE634'
                                : item.status === 'rejected'
                                ? '#FF7B7B'
                                : '#000',
                            ).circle
                          }></View>
                        <TextView
                          title={item.status}
                          style={
                            styles(
                              lang,
                              item.status === 'confirmed'
                                ? '#B5E633'
                                : item.status === 'cancelled'
                                ? '#f91e1e'
                                : item.status === 'pending'
                                ? '#ECE634'
                                : item.status === 'rejected'
                                ? '#FF7B7B'
                                : '#000',
                            ).statusText
                          }
                        />
                      </View>
                    </View>
                  </View>
                </View>
              )}
              showsVerticalScrollIndicator={false}
              keyExtractor={item => item.id}
            />
            {isGetAllBookingsLoading && page !== 1 && (
              <View style={{ marginBottom: 10 }}>
                <ActivityIndicator size="large" color={COLORS.primary} />
              </View>
            )}
          </>
        )
      ) : (
        <TextView
          title={languages[lang].nobooks}
          style={styles(lang).noReviews}
        />
      )}
    </View>
  );
};

export default LastBookings;

{
  /* <ScrollView
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
</ScrollView> */
}
