import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from './styles';
import Top from './Components/Top';
import { useSelector } from 'react-redux';
import { selectLanguage } from 'redux/language';
import ImageSection from './Components/ImageSection';
import TextView from 'atoms/TextView';
import languages from 'values/languages';
import Tab from './Components/Tab';
import { ScrollView } from 'react-native-gesture-handler';
import AboutSection from './Components/AboutSection';
import ExperienceSection from './Components/ExperienceSection';
import ReviewSection from './Components/ReviewSection';
import { useLoadingSelector } from 'redux/selectors';
import Journeys, {
  selectCurrentAgency,
  selectCurrentAgencyJourneys,
  selectCurrentAgencyReviews,
} from 'redux/journey';
import { useRoute } from '@react-navigation/native';
import { useAppDispatch } from 'redux/store';
import { SafeAreaView } from 'react-native-safe-area-context';
import { selectIsDarkMode } from 'redux/DarkMode';

const ProviderProfile = () => {
  const lang = useSelector(selectLanguage);
  const isDarkMode = useSelector(selectIsDarkMode);
  const [select, setselect] = useState(2);

  const isGetJourneysLoading = useLoadingSelector(
    Journeys.thunks.doGetAgencyJourneys,
  );
  const route = useRoute<any>();
  const dispatch = useAppDispatch();
  const journeys = useSelector(selectCurrentAgencyJourneys);
  const agency = useSelector(selectCurrentAgency);
  const isGetAgency = useLoadingSelector(Journeys.thunks.doGetAgency);
  const isGetAgencyReviews = useLoadingSelector(
    Journeys.thunks.doGetAgencyReviews,
  );
  const agencyReviews = useSelector(selectCurrentAgencyReviews);
  const [pageJourneys, setpageJourneys] = useState(1);
  const [pageReviews, setpageReviews] = useState(1);
  useEffect(() => {
    dispatch(
      Journeys.thunks.doGetAgencyJourneys({
        id: route.params?.id,
        page: pageJourneys,
      }),
    );
    dispatch(
      Journeys.thunks.doGetAgencyReviews({
        id: route.params?.id,
        page: pageReviews,
      }),
    );
    dispatch(Journeys.thunks.doGetAgency(route.params?.id));
  }, [route.params?.id, pageJourneys, pageReviews]);

  return (
    <SafeAreaView style={styles(lang, isDarkMode).container}>
      <Top isDarkMode={isDarkMode} lang={lang} />
      <ImageSection isDarkMode={isDarkMode} lang={lang} items={agency} />
      <Tab
        isDarkMode={isDarkMode}
        lang={lang}
        select={select}
        setselect={setselect}
      />

      {select === 1 ? (
        <AboutSection
          lang={lang}
          description={agency?.agencyDataRes?.description}
        />
      ) : select === 2 ? (
        <ExperienceSection
          pageJourneys={pageJourneys}
          setpageJourneys={setpageJourneys}
          isDarkMode={isDarkMode}
          lang={lang}
          journeys={journeys}
          isGetJourneysLoading={isGetJourneysLoading}
        />
      ) : select === 3 ? (
        <ReviewSection
          pageReviews={pageReviews}
          setpageReviews={setpageReviews}
          isDarkMode={isDarkMode}
          lang={lang}
          isGetAgencyReviews={isGetAgencyReviews}
          agency={agency}
          setpageJourneys={setpageJourneys}
        />
      ) : null}
    </SafeAreaView>
  );
};

export default ProviderProfile;
