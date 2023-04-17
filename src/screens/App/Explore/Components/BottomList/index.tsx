import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import React, { useEffect } from 'react';
import Card from '../Card';
import { cardData } from '../data';
import { useSelector } from 'react-redux';
import { selectLanguage } from 'redux/language/index';
import TextView from 'atoms/TextView';
import languages from 'values/languages';
import { styles } from './styles';
import { h } from 'values/Dimensions';
import { useNavigation } from '@react-navigation/native';
import Journeys, { selectCurrentJourneys } from 'redux/journey';
import { useLoadingSelector } from 'redux/selectors';
import SkeletonItem from './SkeletonItem';
import { useAppDispatch } from 'redux/store';

const BottomList = ({
  lang,
  isDarkMode,
}: {
  isDarkMode?: boolean;
  lang: string;
}) => {
  const navigation = useNavigation<any>();
  const journeys = useSelector(selectCurrentJourneys);
  const isGetJourneysLoading = useLoadingSelector(
    Journeys.thunks.doGetJourneys,
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(Journeys.thunks.doGetJourneys({}));
  }, []);
  return (
    <View style={{ flex: 1, paddingBottom: h * 0.07 }}>
      <View style={{ marginHorizontal: 15 }}>
        <View style={[styles(lang).experiences]}>
          <TextView
            title={languages[lang].experiences}
            style={styles(lang, isDarkMode).experiencesText}
          />
          <TextView
            title={languages[lang].seeMore}
            style={styles(lang, isDarkMode).seeMore}
          />
        </View>
      </View>
      <View style={{ paddingTop: 0 }}>
        {isGetJourneysLoading ? (
          [...Array(20)].map(i => (
            <View key={i}>
              <SkeletonItem />
            </View>
          ))
        ) : (
          <FlatList
            data={cardData(lang)}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('detailsTrip');
                }}
                style={{ marginTop: 2 }}>
                <Card
                  title={item.title}
                  description={item.description}
                  location={item.location}
                  name={item.name}
                  stars={item.stars}
                  lang={lang}
                  isDarkMode={isDarkMode}
                />
              </TouchableOpacity>
            )}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
    </View>
  );
};

export default BottomList;
