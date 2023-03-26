import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import Card from '../Card';
import { cardData } from '../data';
import { useSelector } from 'react-redux';
import { selectLanguage } from 'redux/language/index';
import TextView from 'atoms/TextView';
import languages from 'values/languages';
import { styles } from './styles';
import { h } from '../../../../../values/Dimensions';

const BottomList = () => {
  const lang = useSelector(selectLanguage);
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
      <View style={{}}>
        <FlatList
          data={cardData(lang)}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => {}}>
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
