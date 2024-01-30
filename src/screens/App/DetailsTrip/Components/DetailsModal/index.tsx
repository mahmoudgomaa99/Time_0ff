import { View, Text } from 'react-native';
import React, { useCallback, useState } from 'react';
import Modal from 'react-native-modal';
import { styles } from './styles';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Svg from 'atoms/Svg';
import TextView from 'atoms/TextView';

import languages from 'values/languages';
import Card from './Components/Card';
import Top from './Components/Top';
import Bottom from './Components/Bottom';
import { useSelector } from 'react-redux';
import { selectLanguage } from 'redux/language/index';
import Journeys, {
  selectCurrentJourney,
  selectCurrentJourneysAvilabilitey,
} from 'redux/journey';
import { useLoadingSelector } from 'redux/selectors';
import { useAppDispatch } from 'redux/store';
import { useFocusEffect } from '@react-navigation/native';
import moment from 'moment';
import { getDates } from './utils/GetDates';

const DetailsTrip = ({
  isDetailsModalVisibal,
  setisDetailsModalVisibal,
  isDarkMode,
  isRequestReceive,
  setisRequestReceive,
  journey,
}: {
  isDetailsModalVisibal: boolean;
  setisDetailsModalVisibal: any;
  isDarkMode?: boolean;
  isRequestReceive: boolean;
  setisRequestReceive: any;
  journey: any;
}) => {
  const lang = useSelector(selectLanguage);
  const availabilityJourneys = useSelector(selectCurrentJourneysAvilabilitey);
  const isGetJourneysLoading = useLoadingSelector(
    Journeys.thunks.doGetJourneysAvilabilitey,
  );
  const dispatch = useAppDispatch();
  useFocusEffect(
    useCallback(() => {
      dispatch(Journeys.thunks.doGetJourneysAvilabilitey(journey?._id));
    }, [journey?._id]),
  );

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
            title={
              lang === 'ar'
                ? journey?.arabic_journey_name
                : journey?.journey_name
            }
            description={
              lang === 'ar' ? journey?.arabic_description : journey?.description
            }
            location={
              lang === 'ar' ? journey?.arabic_location : journey?.location
            }
            name={journey?.agency_name}
            stars={journey?.rating ? journey?.rating : 0}
            lang={lang}
            isDarkMode={isDarkMode}
            urlImage={journey?.images?.[0]}
          />
          <Bottom
            lang={lang}
            setisDetailsModalVisibal={setisDetailsModalVisibal}
            isDarkMode={isDarkMode}
            availableDates={getDates(availabilityJourneys)}
            availabilityJourneys={availabilityJourneys}
            isRequestReceive={isRequestReceive}
            setisRequestReceive={setisRequestReceive}
            journey={journey}
          />
        </ScrollView>
      </View>
    </Modal>
  );
};

export default DetailsTrip;
