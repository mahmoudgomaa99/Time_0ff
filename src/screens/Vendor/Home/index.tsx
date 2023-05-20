import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from 'redux/user';
import { useLoadingSelector } from 'redux/selectors';
import Journeys, { selectCurrentAgencyJourneys } from 'redux/journey';
import { useAppDispatch } from 'redux/store';
import { styles } from './styles';
import { selectIsDarkMode } from 'redux/DarkMode';
import { selectLanguage } from 'redux/language';
import Header from './Components/Header';
import Content from './Components/Content';

const Home = () => {
  const isDarkMode = useSelector(selectIsDarkMode);
  const lang = useSelector(selectLanguage);
  const userData = useSelector(selectCurrentUser);
  console.log(userData);
  const dispatch = useAppDispatch();
  const isGetJourneysLoading = useLoadingSelector(
    Journeys.thunks.doGetAgencyJourneys,
  );
  const journeys = useSelector(selectCurrentAgencyJourneys);

  useEffect(() => {
    dispatch(Journeys.thunks.doGetAgencyJourneys(userData._id));
  }, []);
  console.log(journeys, 'this is journeys');
  return (
    <View style={styles(lang, isDarkMode).container}>
      <Header isDarkMode={isDarkMode} lang={lang} />
      <Content
        isDarkMode={isDarkMode}
        lang={lang}
        journeys={journeys}
        isGetJourneysLoading={isGetJourneysLoading}
      />
    </View>
  );
};

export default Home;
