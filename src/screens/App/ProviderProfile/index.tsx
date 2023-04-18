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
  selectCurrentAgencyJourneys,
  selectCurrentJourney,
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

  useEffect(() => {
    dispatch(Journeys.thunks.doGetAgencyJourneys(route.params?.id));
  }, [route.params?.id]);
  console.log(route.params?.id);
  console.log(isGetJourneysLoading, 'loading');
  // console.log(journeys)
  return (
    <SafeAreaView style={styles(lang, isDarkMode).container}>
      <Top isDarkMode={isDarkMode} lang={lang} />
      <ImageSection isDarkMode={isDarkMode} lang={lang} />
      <Tab
        isDarkMode={isDarkMode}
        lang={lang}
        select={select}
        setselect={setselect}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        {select === 1 ? (
          <AboutSection lang={lang} />
        ) : select === 2 ? (
          <ExperienceSection
            isDarkMode={isDarkMode}
            lang={lang}
            journeys={journeys}
            isGetJourneysLoading={isGetJourneysLoading}
          />
        ) : select === 3 ? (
          <ReviewSection isDarkMode={isDarkMode} lang={lang} />
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProviderProfile;
