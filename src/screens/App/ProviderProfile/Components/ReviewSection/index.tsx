import { View, Text } from 'react-native';
import React from 'react';
import Card from './Components/Card';
import languages from 'values/languages';
import { Data } from './data';

const ReviewSection = ({
  lang,
  isDarkMode,
}: {
  isDarkMode?: boolean;
  lang: string;
}) => {
  return (
    <View>
      {Data(lang).map(value => (
        <Card
          lang={lang}
          name={languages[lang].user}
          review={languages[lang].cardDescription}
          isDarkMode={isDarkMode}
        />
      ))}
    </View>
  );
};

export default ReviewSection;
