import { View, FlatList, TouchableOpacity, Platform } from 'react-native';
import React from 'react';
import TextView from 'atoms/TextView';
import { categData } from '../data';
import Svg from 'atoms/Svg';
import languages from 'values/languages';
import { styles } from './styles';

const CategSec = ({
  lang,
  isDarkMode,
  setcategory,
  setfilterData,
  setpage,
}: {
  lang: string;
  isDarkMode?: boolean;
  setcategory: any;
  setfilterData: any;
  setpage: any;
}) => {
  return (
    <View style={{}}>
      <TextView
        title={languages[lang].types}
        style={styles(lang, isDarkMode).categoryText}
      />
      <View
        style={{
          direction: lang === 'ar' ? 'rtl' : 'ltr',
          paddingHorizontal: 15,
          transform:
            Platform.OS === 'android' && lang === 'ar'
              ? [{ rotateY: '180deg' }]
              : undefined,
        }}>
        <FlatList
          contentContainerStyle={{}}
          style={{ direction: lang === 'ar' ? 'rtl' : undefined }}
          data={categData(lang)}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                setpage(1);
                setfilterData((prev: any) => {
                  return {
                    category: item.value,
                    start_date: prev?.start_date,
                    location: prev?.location,
                    price_start: prev?.price_start,
                    price_end: prev?.price_end,
                    rating: prev?.rating,
                  };
                });
                setcategory(item.value);
              }}>
              <View
                style={[
                  styles(lang).trips,
                  {
                    transform:
                      Platform.OS === 'android' && lang === 'ar'
                        ? [{ rotateY: '180deg' }]
                        : undefined,
                  },
                ]}>
                <Svg name={item.svgName} size={80} />
                <TextView
                  title={[item.title]}
                  style={styles(lang, isDarkMode).tripText}
                />
              </View>
            </TouchableOpacity>
          )}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          initialScrollIndex={0}
          keyExtractor={(item: any): any => item.id}
        />
      </View>
    </View>
  );
};

export default CategSec;
