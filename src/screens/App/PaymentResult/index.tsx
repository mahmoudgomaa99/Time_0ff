import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import TextView from 'atoms/TextView';
import Svg from 'atoms/Svg';
import Fonts from 'values/fonts';
import { images } from 'src/assets/images';
import { h, w } from 'values/Dimensions';
import Button from 'components/molecules/Button';
import { useAppDispatch } from 'redux/store';
import Journeys from 'redux/journey';
import { unwrapResult } from '@reduxjs/toolkit';
import { useLoadingSelector } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/tokens/reducer';
import { api } from 'redux/_axios';
import COLORS from 'values/colors';
import { selectIsDarkMode } from 'redux/DarkMode';
import { selectLanguage } from 'redux/language';
import languages from 'values/languages';

const PaymentResults = () => {
  const navigation = useNavigation<any>();
  const isDarkMode = useSelector(selectIsDarkMode);
  const token = useSelector(selectToken);
  const dispatch = useAppDispatch();
  const {
    statues,
    message,
    refNum,
  }: {
    statues?: string;
    message?: string;
    refNum?: any;
  } = useRoute()?.params || {};
  const [isLoading, setIsLoading] = React.useState(false);
  const lang = useSelector(selectLanguage);
  return (
    <View style={styles(isDarkMode).container}>
      <View style={styles().body}>
        <Image
          source={statues === 'success' ? images.check : images.failed}
          style={styles().img}
          resizeMode="stretch"
        />
        <TextView
          title={
            statues === 'success'
              ? languages[lang].PaymentSuccess
              : languages[lang].PaymentFailed
          }
          style={styles(isDarkMode).title}
        />
        <TextView title={message} style={styles().message} />
      </View>
      <View style={styles().bottom}>
        <Button
          type="primary"
          label={languages[lang]?.Continue}
          onPress={() => {
            setIsLoading(true);
            api
              .put(`journeys/booking/${refNum}`, {
                statues: statues === 'success' ? 'success' : 'failed',
              })
              .then(res => {
                console.log(res.data);
                setIsLoading(false);
                navigation.navigate('home');
              })
              .catch(err => {
                setIsLoading(false);
                console.log(err);
                navigation.navigate('home');
              });
          }}
          isLoading={isLoading}
          style={styles().btn}
        />
      </View>
    </View>
  );
};

export default PaymentResults;

const styles = (isDarkMode?: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkMode ? COLORS.darkMode : 'white',
    },
    header: {
      flex: 0.1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    body: {
      flex: 0.8,
      justifyContent: 'center',
      alignItems: 'center',
    },
    bottom: {
      flex: 0.2,
      alignItems: 'center',
    },
    img: {
      width: w * 0.3,
      height: h * 0.15,
    },
    title: {
      fontSize: 30,
      color: isDarkMode ? COLORS.white : '#000',
      textAlign: 'center',
      fontFamily: Fonts.RobotoBlackItalic,
      marginTop: 20,
    },
    message: {
      fontSize: 20,
      color: '#000',
      textAlign: 'center',
      fontFamily: Fonts.RobotoMedium,
      marginTop: 10,
      lineHeight: 25,
    },
    btn: {
      width: w * 0.8,
      height: h * 0.08,
    },
  });
