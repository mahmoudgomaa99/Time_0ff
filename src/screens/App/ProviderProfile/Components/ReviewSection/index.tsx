import { View, Text } from 'react-native';
import React from 'react';
import Card from './Components/Card';
import languages from 'values/languages';

const ReviewSection = ({ lang }: { lang: string }) => {
  return (
    <View>
      {[1, 2, 3, 4, 5].map(value => (
        <Card
          lang={lang}
          name={languages[lang].user}
          review={languages[lang].cardDescription}
        />
      ))}
    </View>
  );
};

export default ReviewSection;
