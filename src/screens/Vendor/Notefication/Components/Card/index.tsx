import { View, TouchableOpacity, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import Svg from 'atoms/Svg';
import TextView from 'atoms/TextView';
import { styles } from './styles';
import { useAppDispatch } from 'redux/store';
import Journeys from 'redux/journey';
import { useLoadingSelector } from 'redux/selectors';
import COLORS from 'values/colors';
import { unwrapResult } from '@reduxjs/toolkit';

const Card = ({
  lang,
  iconName,
  message,
  date,
  isDarkMode,
  id,
  user,
  page,
  setPage,
  number_of_seats,
}: {
  lang: string;
  iconName: any;
  message: string;
  date: string;
  isDarkMode?: boolean;
  id: number;
  user: any;
  page: number;
  setPage: any;
  number_of_seats: number;
}) => {
  const dispatch = useAppDispatch();
  const isLoading = useLoadingSelector(Journeys.thunks.doConfirmBooking);
  const isLoading2 = useLoadingSelector(Journeys.thunks.doCancelBooking);
  const [bookId, setBookId] = useState<any>(null);
  return (
    <View>
      <View style={styles(lang, isDarkMode).container}>
        <View style={styles(lang).first}>
          <Svg name={iconName} size={80} />
        </View>
        <View style={styles(lang).second}>
          <TextView title={message} style={styles(lang, isDarkMode).message} />
          <View style={styles(lang, isDarkMode).seats_date}>
            <TextView
              title={`${number_of_seats} Seats`}
              style={styles(lang).seats}
            />
            <TextView title={date} style={styles(lang).date} />
          </View>
        </View>
        <View style={styles(lang, isDarkMode).buttons}>
          {isLoading && bookId === id ? (
            <ActivityIndicator size={'small'} color={COLORS.green} />
          ) : (
            <TouchableOpacity
              onPress={() => {
                setBookId(id);
                dispatch(Journeys.thunks.doConfirmBooking(id))
                  .then(unwrapResult)
                  .then(res => {
                    setPage(1);
                    dispatch(
                      Journeys.thunks.doGetAgencyNotification({
                        id: user._id,
                        page: 1,
                      }),
                    );
                  })
                  .catch(() => {});
              }}>
              <View style={styles(lang, isDarkMode).rigth}>
                <View style={styles(lang, isDarkMode).lineOneR}></View>
                <View style={styles(lang, isDarkMode).lineTwoR}></View>
              </View>
            </TouchableOpacity>
          )}

          {isLoading2 && bookId === id ? (
            <ActivityIndicator size={'small'} color={COLORS.red} />
          ) : (
            <TouchableOpacity
              onPress={() => {
                setBookId(id);
                dispatch(Journeys.thunks.doCancelBooking(id))
                  .then(unwrapResult)
                  .then(() => {
                    setPage(1);
                    dispatch(
                      Journeys.thunks.doGetAgencyNotification({
                        id: user._id,
                        page: 1,
                      }),
                    );
                  })
                  .catch(() => {});
              }}>
              <View style={styles(lang, isDarkMode).close}>
                <View style={styles(lang, isDarkMode).lineOneC}></View>
                <View style={styles(lang, isDarkMode).lineTwoC}></View>
              </View>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

export default Card;
