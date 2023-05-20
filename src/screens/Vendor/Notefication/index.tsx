import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { useSelector } from 'react-redux';
import { selectLanguage } from 'redux/language';
import { selectIsDarkMode } from 'redux/DarkMode';
import { Data } from './data';
import Card from './Components/Card';

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
      ) : // ) : (
      //   <View style={styles(lang).noInbox}>
      //     <Svg name="bill" size={200} />
      //     <TextView
      //       title={languages[lang].notHaveInbox}
      //       style={styles(lang).text}
      //     />
      //   </View>
      // )}
      null}
    </View>
  );
};

export default Notefication;
