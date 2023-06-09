import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import SkeletonItem from 'components/molecules/SkeletonItem';
import Card from 'screens/App/MainPage/Components/Card';
import { Tjourneys } from 'redux/journey/model';
import languages from 'values/languages';
import COLORS from 'values/colors';
import { h } from 'values/Dimensions';

const Content = ({
  lang,
  isDarkMode,
  journeys,
  isGetJourneysLoading,
  page,
  setpage,
}: {
  isDarkMode?: boolean;
  lang: string;
  journeys?: Tjourneys;
  isGetJourneysLoading: any;
  page: number;
  setpage: any;
}) => {
  const navigation = useNavigation<any>();

  return (
    <>
      {isGetJourneysLoading && page === 1 ? (
        [...Array(5)].map(i => (
          <View key={i}>
            <SkeletonItem />
          </View>
        ))
      ) : journeys?.length !== 0 ? (
        <>
          <>
            <FlatList
              contentContainerStyle={{ paddingBottom: 50 }}
              onEndReached={() => {
                setpage((prev: number) => prev + 1);
              }}
              data={journeys}
              renderItem={({ item }) => (
                <TouchableOpacity
                  key={item._id}
                  onPress={() => {
                    navigation.navigate('journeyDetails', { id: item._id });
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
              keyExtractor={(item: any) => item._id}
            />
            {isGetJourneysLoading && page !== 1 && (
              <View style={{ marginBottom: 10 }}>
                <ActivityIndicator size="large" color={COLORS.primary} />
              </View>
            )}
          </>
          {/* {journeys?.map((item?: any) => (
            <TouchableOpacity
              key={item._id}
              onPress={() => {
                navigation.navigate('journeyDetails', { id: item._id });
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
          ))} */}
        </>
      ) : (
        <View>
          <Text
            style={{
              textAlign: 'center',
              marginTop: h * 0.1,
              color: COLORS.grey,
            }}>
            {languages[lang].noJourneys}
          </Text>
        </View>
      )}
    </>
  );
};

export default Content;
