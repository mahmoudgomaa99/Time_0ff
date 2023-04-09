import { View, Text, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import Svg from 'atoms/Svg';
import TextView from 'atoms/TextView';
import { data } from './data';
import { styles } from './styles';
import languages from 'values/languages';
import { useNavigation } from '@react-navigation/native';

const Contents = ({ lang }: { lang: string }) => {
  const navigation = useNavigation<any>();
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
              <Svg name={value.iconName} size={60} />
              <TextView title={value.title} style={styles(lang).text} />
            </View>
            <Svg name="smallArrow" size={25} style={styles(lang).arrow} />
          </TouchableOpacity>
        </View>
      ))}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('auth', { screenName: 'login' });
        }}
        style={styles(lang).container}>
        <View style={styles(lang).innerContainer}>
          <Svg name="logout" size={60} />
          <TextView title={languages[lang].logout} style={styles(lang).text} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Contents;
