import { View, Text, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import Svg from 'atoms/Svg';
import TextView from 'atoms/TextView';
import { data } from './data';
import { styles } from './styles';
import languages from 'values/languages';

const Contents = ({ lang }: { lang: string }) => {
  return (
    <View style={styles(lang).parentContainer}>
      {data(lang).map((value, index) => (
        <View>
          <TouchableOpacity
            onPress={() => console.log('clicked')}
            style={styles(lang).container}>
            <View style={styles(lang).innerContainer}>
              <Svg name={value.iconName} size={60}/>
              <TextView title={value.title} style={styles(lang).text} />
            </View>
            <Svg name="smallArrow" size={25} style={styles(lang).arrow}/>
          </TouchableOpacity>
        </View>
      ))}
      <TouchableOpacity
        onPress={() => console.log('clicked')}
        style={styles(lang).container}>
        <View style={styles(lang).innerContainer}>
          <Svg name='logout' size={60}/>
          <TextView title={languages[lang].logout} style={styles(lang).text} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Contents;
