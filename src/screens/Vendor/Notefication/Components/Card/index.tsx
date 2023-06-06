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
import { set } from 'lodash';
import { Toast } from 'react-native-toast-message/lib/src/Toast';

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
}) => {
  const dispatch = useAppDispatch();

  return (
    <View>
      <View style={styles(lang, isDarkMode).container}>
        <View style={styles(lang).first}>
          <Svg name={iconName} size={80} />
        </View>
        <View style={styles(lang).second}>
          <TextView
            title={message}
            style={styles(lang, isDarkMode).message}
            // onPress={() => {
            //   message.includes('accepted') || message.includes('قبول')
            //     ? setisPayment(true)
            //     : null;
            // }}
          />
          <TextView title={date} style={styles(lang).date} />
        </View>
        <View style={styles(lang, isDarkMode).buttons}>
          <TouchableOpacity
            onPress={() => {
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
          <TouchableOpacity
            onPress={() => {
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
        </View>
      </View>
    </View>
  );
};

export default Card;
