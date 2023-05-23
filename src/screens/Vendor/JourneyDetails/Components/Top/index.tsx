import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import React from 'react';
import Svg from 'atoms/Svg';
import { styles } from './styles';
import TextView from 'atoms/TextView';
import { useNavigation } from '@react-navigation/native';
import languages from 'values/languages';
import { useAppDispatch } from 'redux/store';
import Journeys from 'redux/journey';
import { unwrapResult } from '@reduxjs/toolkit';
import { useLoadingSelector } from 'redux/selectors';
import COLORS from 'values/colors';

const Top = ({
  lang,
  isDarkMode,
  id,
}: {
  lang: string;
  isDarkMode: boolean;
  id?: number;
}) => {
  const navigation = useNavigation<any>();
  const dispatch = useAppDispatch();
  const isLoading = useLoadingSelector(Journeys.thunks.doRemoveJourneys);
  return (
    <View style={styles(lang, isDarkMode).container}>
      <Svg
        name="arrow"
        size={60}
        style={styles(lang, isDarkMode).arrow}
        onPress={() => navigation.goBack()}
      />
      <TextView
        title={languages[lang].journeysDetails}
        style={styles(lang, isDarkMode).screenText}
      />
      <TouchableOpacity
        onPress={() =>
          dispatch(Journeys.thunks.doRemoveJourneys(id))
            .then(unwrapResult)
            .then(() => {
              navigation.goBack();
            })
            .catch(err => {})
        }>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.red} />
        ) : (
          <Svg name="trash" size={60} />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Top;
