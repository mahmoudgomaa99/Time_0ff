import { View, Text } from 'react-native';
import React from 'react';
import languages from 'values/languages';
import Card from './Components/Card';

const ExperienceSection = ({ lang }: { lang: string }) => {
  return (
    <View>
      {[1, 2, 3, 4, 5].map(value => (
        <Card
        title={languages[lang].cardTitle}
        description={languages[lang].cardDescription}
        location={languages[lang].cardLocation}
        name={languages[lang].cardName}
        stars={languages[lang].cardStars}
        lang={lang}
        />
      ))}
    </View>
  );
};

export default ExperienceSection;
