import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import languages from 'values/languages';
import Card from '../../../MainPage/Components/Card';
import { Data } from './data';
import SkeletonItem from 'components/molecules/SkeletonItem';
import { useNavigation } from '@react-navigation/native';

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
  const navigation = useNavigation<any>();
  console.log(journeys, 'journeys');

  return (
    <View>
      {isGetJourneysLoading
        ? [...Array(20)].map(i => (
            <View key={i}>
              <SkeletonItem />
            </View>
          ))
        : journeys?.map((item?: any) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('detailsTrip', { id: item._id });
              }}>
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
            </TouchableOpacity>
          ))}
    </View>
  );
};

export default ExperienceSection;
