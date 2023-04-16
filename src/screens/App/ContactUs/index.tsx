import { View, Text } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectLanguage } from 'redux/language';
import Top from './Components/Top';
import { styles } from './styles';
import Card from './Components/Card';
import { Data } from './data';
import { SafeAreaView } from 'react-native-safe-area-context';

const ContactUs = () => {
  const lang = useSelector(selectLanguage);
  return (
    <SafeAreaView style={styles(lang).container}>
      <Top lang={lang} />
      {Data(lang).map(value => (
        <Card
          lang={lang}
          iconName={value.iconName}
          title={value.title}
          subTitle={value.subTitle}
        />
      ))}
    </SafeAreaView>
  );
};

export default ContactUs;
