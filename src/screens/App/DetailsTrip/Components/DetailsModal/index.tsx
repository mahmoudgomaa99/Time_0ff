import { View, Text } from 'react-native';
import React, { useCallback, useState } from 'react';
import Modal from 'react-native-modal';
import { styles } from './styles';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Svg from 'atoms/Svg';
import TextView from 'atoms/TextView';

import languages from 'values/languages';
import Card from './Card';
import Top from './Top';
import Bottom from './Bottom';
import { useSelector } from 'react-redux';
import { selectLanguage } from 'redux/language/index';
import Journeys, {
  selectCurrentJourney,
  selectCurrentJourneysAvilabilitey,
} from 'redux/journey';
import { useLoadingSelector } from 'redux/selectors';
import { useAppDispatch } from 'redux/store';
import { useFocusEffect } from '@react-navigation/native';

const DetailsTrip = ({
  isDetailsModalVisibal,
  setisDetailsModalVisibal,
  isDarkMode,
}: {
  isDetailsModalVisibal: boolean;
  setisDetailsModalVisibal: any;
  isDarkMode?: boolean;
}) => {
  const lang = useSelector(selectLanguage);
  const journey = useSelector(selectCurrentJourney);
  const availabilityJourneys = useSelector(selectCurrentJourneysAvilabilitey);
  const isGetJourneysLoading = useLoadingSelector(
    Journeys.thunks.doGetJourneysAvilabilitey,
  );
  const dispatch = useAppDispatch();
  useFocusEffect(
    useCallback(() => {
      dispatch(Journeys.thunks.doGetJourneysAvilabilitey(journey._id));
    }, []),
  );

  const Dates: any = {};
  const getDates = (Journeys: any) => {
    const dates = Journeys?.map((journey: any) => {
      const [month, day, year] = journey.available_date.split('/');
      const newDateStr = `${year}-${month.padStart(2, '0')}-${day.padStart(
        2,
        '0',
      )}`;
      Dates[newDateStr] = {
        disabled: false,
      };
      return journey.available_date;
    });
    console.log(Dates);
  };
  getDates(availabilityJourneys);

  return (
    <Modal
      isVisible={isDetailsModalVisibal}
      style={{ marginHorizontal: 0, marginBottom: 0 }}>
      <View style={styles(isDarkMode).modalContainer}>
        <Top
          lang={lang}
          isDetailsModalVisibal={isDetailsModalVisibal}
          setisDetailsModalVisibal={setisDetailsModalVisibal}
          isDarkMode={isDarkMode}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Card
            title={languages[lang].cardTitle}
            description={languages[lang].cardDescription}
            location={languages[lang].cardLocation}
            name={languages[lang].cardName}
            stars={languages[lang].cardStars}
            lang={lang}
            isDarkMode={isDarkMode}
          />
          <Bottom
            lang={lang}
            setisDetailsModalVisibal={setisDetailsModalVisibal}
            isDarkMode={isDarkMode}
            availableDates={Dates}
            availabilityJourneys={availabilityJourneys}
          />
        </ScrollView>
      </View>
    </Modal>
  );
};

export default DetailsTrip;
