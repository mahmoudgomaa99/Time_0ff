import { View, Text } from 'react-native';
import React from 'react';
import languages from 'values/languages';
import Card from '../../../MainPage/Components/Card';
import { Data } from './data';

const ExperienceSection = ({
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
          title={value.title}
          description={value.description}
          location={value.location}
          name={value.name}
          stars={value.stars}
          lang={lang}
          isDarkMode={isDarkMode}
        />
      ))}
    </View>
  );
};

export default ExperienceSection;
