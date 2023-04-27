import { View, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import Card from '../Card';
import TextView from 'atoms/TextView';
import languages from 'values/languages';
import { styles } from './styles';
import { h } from 'values/Dimensions';
import { useNavigation } from '@react-navigation/native';
import SkeletonItem from 'components/molecules/SkeletonItem';

const BottomList = ({
  lang,
  isDarkMode,
  isGetJourneysLoading,
  journeys,
}: {
  isDarkMode?: boolean;
  lang: string;
  isGetJourneysLoading: boolean;
  journeys: any;
}) => {
  const navigation = useNavigation<any>();

  return (
    <View style={{ flex: 1, paddingBottom: h * 0.07 }}>
      <View style={{ marginHorizontal: 15 }}>
        <View style={[styles(lang).experiences]}>
          <TextView
            title={languages[lang].activity}
            style={styles(lang, isDarkMode).experiencesText}
          />
          <TextView
            title={languages[lang].seeMore}
            style={styles(lang, isDarkMode).seeMore}
            onPress={() => {
              navigation.navigate('seeMore');
            }}
          />
        </View>
      </View>
      <View style={{ paddingTop: 0 }}>
        {journeys.length > 0 ? (
          isGetJourneysLoading ? (
            [...Array(20)].map(i => (
              <View key={i}>
                <SkeletonItem />
              </View>
            ))
          ) : (
            <FlatList
              data={journeys}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('detailsTrip', { id: item._id });
                  }}
                  style={{ marginTop: 2 }}>
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
            />
          )
        ) : (
          <TextView
            title={languages[lang].noData}
            style={styles(lang, isDarkMode).text}
          />
        )}
      </View>
    </View>
  );
};

export default BottomList;
