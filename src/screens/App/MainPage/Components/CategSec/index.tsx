import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import TextView from 'atoms/TextView';
import { categData } from '../data';
import Svg from 'atoms/Svg';
import languages from 'values/languages';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../../../../../redux/language/index';
import { styles } from './styles';
import { w } from '../../../../../values/Dimensions';

const CategSec = () => {
  const lang = useSelector(selectLanguage);
  return (
    <View style={{}}>
      <TextView
        title={languages[lang].types}
        style={styles(lang).categoryText}
      />
      <View
        style={{
          direction: lang === 'ar' ? 'rtl' : 'ltr',
          paddingHorizontal: 15,
        }}>
        <FlatList
          data={categData(lang)}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => {}}>
              <View style={styles(lang).trips}>
                <Svg name={item.svgName} size={80} />
                <TextView title={item.title} style={styles(lang).tripText} />
              </View>
            </TouchableOpacity>
          )}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default CategSec;
