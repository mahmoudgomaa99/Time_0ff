import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import Card from '../Card';
import { cardData } from '../data';
import { useSelector } from 'react-redux';
import { selectLanguage } from 'redux/language/index';
import TextView from 'atoms/TextView';
import languages from 'values/languages';
import { styles } from './styles';
import { h } from 'values/Dimensions';
import { useNavigation } from '@react-navigation/native';

const BottomList = () => {
  const lang = useSelector(selectLanguage);
  const navigation = useNavigation<any>();
  return (
    <View style={{ flex: 1, paddingBottom: h * 0.07 }}>
      <View style={{ marginHorizontal: 15 }}>
        <View style={[styles(lang).experiences]}>
          <TextView
            title={languages[lang].experiences}
            style={styles(lang).experiencesText}
          />
          <TextView
            title={languages[lang].seeMore}
            style={styles(lang).seeMore}
          />
        </View>
      </View>
      <View style={{ paddingTop: 0 }}>
        <FlatList
          data={cardData(lang)}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('detailsTrip');
              }}
              style={{ marginTop: 2 }}>
              <Card
                title={item.title}
                description={item.description}
                location={item.location}
                name={item.name}
                stars={item.stars}
                lang={lang}
              />
            </TouchableOpacity>
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default BottomList;
