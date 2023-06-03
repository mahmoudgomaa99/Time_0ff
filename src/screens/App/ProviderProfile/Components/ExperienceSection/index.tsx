import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import languages from 'values/languages';
import Card from '../../../MainPage/Components/Card';
import { Data } from './data';
import SkeletonItem from 'components/molecules/SkeletonItem';
import { useNavigation } from '@react-navigation/native';
import COLORS from 'values/colors';

const ExperienceSection = ({
  lang,
  isDarkMode,
  journeys,
  isGetJourneysLoading,
  pageJourneys,
  setpageJourneys,
}: {
  isDarkMode?: boolean;
  lang: string;
  journeys: any;
  isGetJourneysLoading: any;
  pageJourneys: number;
  setpageJourneys: any;
}) => {
  const navigation = useNavigation<any>();


  return (
    <View>
      {
        isGetJourneysLoading && pageJourneys === 1 ? (
          [...Array(20)].map(i => (
            <View key={i}>
              <SkeletonItem />
            </View>
          ))
        ) : (
          <>
            <FlatList
              onEndReached={() => {
                setpageJourneys((prev: number) => prev + 1);
              }}
              data={journeys}
              renderItem={({ item }) => (
                <TouchableOpacity
                  key={item.id}
                  onPress={() => {
                    navigation.navigate('detailsTrip', { id: item._id });
                  }}>
                  <Card
                    title={
                      lang === 'ar'
                        ? item.arabic_journey_name
                        : item.journey_name
                    }
                    description={
                      lang === 'ar' ? item.arabic_description : item.description
                    }
                    location={
                      lang === 'ar' ? item.arabic_location : item.location
                    }
                    name={item.agency_name}
                    stars={item.rating ? item.rating : 0}
                    lang={lang}
                    isDarkMode={isDarkMode}
                    isFav={item.is_favorite}
                    urlImage={item.image}
                  />
                </TouchableOpacity>
              )}
              showsVerticalScrollIndicator={false}
              keyExtractor={item => item.id}
            />
            {isGetJourneysLoading && pageJourneys !== 1 && (
              <View style={{ marginBottom: 10 }}>
                <ActivityIndicator size="large" color={COLORS.primary} />
              </View>
            )}
          </>
        )

        //  journeys?.map((item?: any) => (
        // <TouchableOpacity
        //   key={item.id}
        //   onPress={() => {
        //     navigation.navigate('detailsTrip', { id: item._id });
        //   }}>
        //   <Card
        //     title={
        //       lang === 'ar' ? item.arabic_journey_name : item.journey_name
        //     }
        //     description={
        //       lang === 'ar' ? item.arabic_description : item.description
        //     }
        //     location={lang === 'ar' ? item.arabic_location : item.location}
        //     name={item.agency_name}
        //     stars={item.rating ? item.rating : 0}
        //     lang={lang}
        //     isDarkMode={isDarkMode}
        //     isFav={item.is_favorite}
        //     urlImage={item.image}
        //   />
        // </TouchableOpacity>
        //   ))
      }
    </View>
  );
};

export default ExperienceSection;
