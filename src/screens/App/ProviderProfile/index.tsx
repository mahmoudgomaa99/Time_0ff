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
import Journeys, { selectCurrentJourney } from 'redux/journey';
import { useRoute } from '@react-navigation/native';
import { useAppDispatch } from 'redux/store';
import { SafeAreaView } from 'react-native-safe-area-context';



const ProviderProfile = () => {
  const lang = useSelector(selectLanguage);

  const [select, setselect] = useState(2);
  const isGetJourneyLoading = useLoadingSelector(Journeys.thunks.doGetJourney);
  const route = useRoute();
  const dispatch = useAppDispatch();
  const journey = useSelector(selectCurrentJourney);

  // useEffect(() => {
  //   dispatch(Journeys.thunks.doGetJourney(route.params?.id));
  // }, [route.params?.id]);
  // console.log(route.params?.id)
  return (
    <SafeAreaView style={styles(lang).container}>
      <Top lang={lang} />
      <ImageSection lang={lang} />
      <Tab lang={lang} select={select} setselect={setselect} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {select === 1 ? (
          <AboutSection lang={lang} />
        ) : select === 2 ? (
          <ExperienceSection lang={lang} />
        ) : select === 3 ? (
          <ReviewSection lang={lang} />
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProviderProfile;
