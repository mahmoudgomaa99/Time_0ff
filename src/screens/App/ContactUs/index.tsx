import { View, Text } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectLanguage } from 'redux/language';
import Top from './Components/Top';
import { styles } from './styles';
import Card from './Components/Card';
import { Data } from './data';

const ContactUs = () => {
  const lang = useSelector(selectLanguage);
  return (
    <View style={styles(lang).container}>
      <Top lang={lang} />
      {Data(lang).map(value => (
        <Card
          lang={lang}
          iconName={value.iconName}
          title={value.title}
          subTitle={value.subTitle}
        />
      ))}
    </View>
  );
};

export default ContactUs;
