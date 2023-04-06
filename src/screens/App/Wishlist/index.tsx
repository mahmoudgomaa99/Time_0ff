import { View, Text } from 'react-native';
import React from 'react';
import { styles } from './styles';
import Top from './Components/Top';
import { useSelector } from 'react-redux';
import { selectLanguage } from 'redux/language';
import Card from './Components/Card';
import { Data } from './data';
import { ScrollView } from 'react-native-gesture-handler';

const Wishlist = () => {
  const lang = useSelector(selectLanguage);
  return (
    <View style={styles(lang).container}>
      <Top lang={lang} />
      <ScrollView>
        {Data(lang).map(value => (
          <Card
            title={value.title}
            description={value.description}
            location={value.location}
            name={value.name}
            stars={value.stars}
            lang={lang}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Wishlist;
