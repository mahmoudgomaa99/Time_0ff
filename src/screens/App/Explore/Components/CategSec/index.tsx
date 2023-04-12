import { View, FlatList, TouchableOpacity, Platform } from 'react-native';
import React from 'react';
import TextView from 'atoms/TextView';
import Svg from 'atoms/Svg';
import languages from 'values/languages';
import { styles } from './styles';
import { categData } from '../data';

const CategSec = ({ lang }: { lang: string }) => {
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
          transform:
            Platform.OS === 'android' && lang === 'ar'
              ? [{ rotateY: '180deg' }]
              : undefined,
        }}>
        <FlatList
          contentContainerStyle={{}}
          style={{ direction: 'rtl' }}
          data={categData(lang)}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => {}}>
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
                <TextView title={[item.title]} style={styles(lang).tripText} />
              </View>
            </TouchableOpacity>
          )}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          initialScrollIndex={0}
        />
      </View>
    </View>
  );
};

export default CategSec;
