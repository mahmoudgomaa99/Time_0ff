import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import SkeletonItem from 'components/molecules/SkeletonItem';
import Card from 'screens/App/MainPage/Components/Card';
import { Tjourneys } from 'redux/journey/model';

const Content = ({
  lang,
  isDarkMode,
  journeys,
  isGetJourneysLoading,
}: {
  isDarkMode?: boolean;
  lang: string;
  journeys: Tjourneys;
  isGetJourneysLoading: any;
}) => {
  const navigation = useNavigation<any>();
  console.log(journeys, 'journeys');

  return (
    <ScrollView>
      {isGetJourneysLoading
        ? [...Array(20)].map(i => (
            <View key={i}>
              <SkeletonItem />
            </View>
          ))
        : journeys.map((item?: any) => (
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
    </ScrollView>
  );
};

export default Content;
