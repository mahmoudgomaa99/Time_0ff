import { View, Text } from 'react-native';
import React from 'react';
import { styles } from './styles';
import Top from './Components/Top';
import { useSelector } from 'react-redux';
import { selectLanguage } from 'redux/language';
import Card from './Components/Card';
import { Data } from './data';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

const Wishlist = () => {
  const lang = useSelector(selectLanguage);
  return (
    <SafeAreaView style={styles(lang).container}>
      <Top lang={lang} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ marginVertical: 20 }}>
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
    </SafeAreaView>
  );
};

export default Wishlist;
