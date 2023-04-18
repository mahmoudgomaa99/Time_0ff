import { View, Text } from 'react-native';
import React from 'react';
import languages from 'values/languages';
import Card from '../../../MainPage/Components/Card';
import { Data } from './data';
import SkeletonItem from 'components/molecules/SkeletonItem';

const ExperienceSection = ({
  lang,
  isDarkMode,
  journeys,
  isGetJourneysLoading,
}: {
  isDarkMode?: boolean;
  lang: string;
  journeys: any;
  isGetJourneysLoading: any;
}) => {
  return (
    <View>
      {isGetJourneysLoading
        ? [...Array(20)].map(i => (
            <View key={i}>
              <SkeletonItem />
            </View>
          ))
        : journeys?.map((item: any) => (
            <Card
              title={
                lang === 'ar' ? item.arabic_journey_name : item.journey_name
              }
              description={
                lang === 'ar' ? item.arabic_description : item.description
              }
              location={lang === 'ar' ? item.arabic_location : item.location}
              name={item.agency_name}
              stars={item.rating ? item.rating : 0}
              lang={lang}
              isDarkMode={isDarkMode}
              isFav={item.is_favorite}
              urlImage={item.image}
            />
          ))}
    </View>
  );
};

export default ExperienceSection;
