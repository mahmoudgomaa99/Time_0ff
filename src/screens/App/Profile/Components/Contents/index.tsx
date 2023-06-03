import { View, Text, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import Svg from 'atoms/Svg';
import TextView from 'atoms/TextView';
import { data } from './data';
import { styles } from './styles';
import languages from 'values/languages';
import { useNavigation } from '@react-navigation/native';
import { useAppDispatch } from 'redux/store';
import User, { selectCurrentUser } from 'redux/user';
import { useSelector } from 'react-redux';
import AuthModal from 'components/organisms/AuthModal';
import useModalHandler from 'hooks/Modal';
import { UserType } from 'redux/UserType';

const Contents = ({
  lang,
  isDarkMode,
  currentUser,
}: {
  lang: string;
  isDarkMode: boolean;
  currentUser: any;
}) => {
  const navigation = useNavigation<any>();
  const dispatch = useAppDispatch();
  const { openCustomModal, closeCustomModal, CustomModal } = useModalHandler();

  return (
    <View style={styles(lang).parentContainer}>
      {data(lang).map((value: any, index) => (
        <View key={index}>
          <TouchableOpacity
            onPress={() => {
              if (value.iconName !== 'setting') {
                if (!currentUser) {
                  openCustomModal();
                } else {
                  navigation.navigate(value.to);
                }
              } else {
                navigation.navigate(value.to);
              }
            }}
            style={styles(lang).container}>
            <View style={styles(lang).innerContainer}>
              <View
                style={
                  value.iconName === 'setting'
                    ? styles(lang, isDarkMode).svg
                    : null
                }>
                <Svg
                  name={value.iconName}
                  size={value.iconName === 'setting' ? 35 : 60}
                />
              </View>

              <TextView
                title={value.title}
                style={styles(lang, isDarkMode).text}
              />
            </View>
            <Svg name="smallArrow" size={25} style={styles(lang).arrow} />
          </TouchableOpacity>
        </View>
      ))}
      <TouchableOpacity
        onPress={() => {
          dispatch(User.actions.logoutAction());
          dispatch(UserType.setUserData(undefined));
          navigation.navigate('auth', { screen: 'chooseType' });
        }}
        style={styles(lang).container}>
        <View style={styles(lang).innerContainer}>
          <Svg name="logout" size={60} />
          <TextView
            title={languages[lang].logout}
            style={styles(lang, isDarkMode).text}
          />
        </View>
      </TouchableOpacity>
      <AuthModal
        closeCustomModal={closeCustomModal}
        CustomModal={CustomModal}
        type="profile"
      />
    </View>
  );
};

export default Contents;
