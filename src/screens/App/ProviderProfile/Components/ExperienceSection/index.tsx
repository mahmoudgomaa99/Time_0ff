import { View, Text } from 'react-native';
import React from 'react';
import languages from 'values/languages';
import Card from './Components/Card';
import { Data } from './data';

const ExperienceSection = ({ lang }: { lang: string }) => {
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
        />
      ))}
    </View>
  );
};

export default ExperienceSection;
