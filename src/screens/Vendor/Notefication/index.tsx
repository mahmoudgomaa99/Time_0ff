import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { useSelector } from 'react-redux';
import { selectLanguage } from 'redux/language';
import { selectIsDarkMode } from 'redux/DarkMode';
import { Data } from './data';
import Card from './Components/Card';
import languages from 'values/languages';
import TextView from 'atoms/TextView';

const Notefication = () => {
  const lang = useSelector(selectLanguage);
  const isDarkMode = useSelector(selectIsDarkMode);
  return (
    <View style={styles(lang, isDarkMode).container}>
      {Data(lang).length > 0 ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ marginHorizontal: 10 }}>
          {Data(lang).map(value => (
            <Card
              lang={lang}
              iconName={value.iconName}
              message={value.message}
              date={value.date}
              isDarkMode={isDarkMode}
            />
          ))}
        </ScrollView>
      ) : (
        <View style={styles(lang).noInbox}>
          <TextView
            title={languages[lang].noNotification}
            style={styles(lang, isDarkMode).text}
          />
        </View>
      )}
    </View>
  );
};

export default Notefication;
