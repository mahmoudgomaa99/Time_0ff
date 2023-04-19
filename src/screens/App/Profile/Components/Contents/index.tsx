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

const Contents = ({
  lang,
  isDarkMode,
}: {
  lang: string;
  isDarkMode: boolean;
}) => {
  const navigation = useNavigation<any>();
  const dispatch = useAppDispatch();
  const currentUser = useSelector(selectCurrentUser);
  return (
    <View style={styles(lang).parentContainer}>
      {data(lang).map((value: any, index) => (
        <View>
          <TouchableOpacity
            onPress={() => {
              console.log('before');
              navigation.navigate(value.to);
              console.log('after');
            }}
            style={styles(lang).container}>
            <View style={styles(lang).innerContainer}>
              <View
                style={value.iconName === 'setting' ? styles(lang,isDarkMode).svg : null}>
                <Svg
                  name={value.iconName}
                  size={value.iconName === 'setting' ? 35 : 60}
                />
              </View>

              <TextView title={value.title} style={styles(lang,isDarkMode).text} />
            </View>
            <Svg name="smallArrow" size={25} style={styles(lang).arrow} />
          </TouchableOpacity>
        </View>
      ))}
      {currentUser && (
        <TouchableOpacity
          onPress={() => {
            dispatch(User.logout());
          }}
          style={styles(lang).container}>
          <View style={styles(lang).innerContainer}>
            <Svg name="logout" size={60} />
            <TextView
              title={languages[lang].logout}
              style={styles(lang,isDarkMode).text}
            />
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Contents;
