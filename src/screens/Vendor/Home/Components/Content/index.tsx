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
import { Tjourney } from 'redux/journey/model';
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
  journeys?: Tjourney[];
  isGetJourneysLoading: any;
  page: number;
  setpage: any;
}) => {
  const navigation = useNavigation<any>();

  return (
    <>
      {isGetJourneysLoading && page === 1 ? (
        [...Array(5)].map((i, index) => (
          <View key={index}>
            <SkeletonItem />
          </View>
        ))
      ) : journeys?.length !== 0 ? (
        <View style={{ height: h * 0.72 }}>
          <FlatList
            contentContainerStyle={{ paddingBottom: h * 0.06 }}
            onEndReached={() => {
              setpage((prev: number) => prev + 1);
            }}
            data={journeys}
            renderItem={({ item }) => (
              <View key={item._id}>
                <TouchableOpacity
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
              </View>
            )}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item: any) => item._id}
          />
          {isGetJourneysLoading && page !== 1 && (
            <View style={{ marginBottom: 10 }}>
              <ActivityIndicator size="large" color={COLORS.primary} />
            </View>
          )}
        </View>
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
