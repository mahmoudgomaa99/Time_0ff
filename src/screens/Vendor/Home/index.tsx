import { Text, TouchableOpacity, View } from 'react-native';
import React, { useCallback, useEffect } from 'react';
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
import languages from 'values/languages';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation<any>();
  const isDarkMode = useSelector(selectIsDarkMode);
  const lang = useSelector(selectLanguage);
  const userData = useSelector(selectCurrentUser);
  console.log(userData);
  const dispatch = useAppDispatch();
  const isGetJourneysLoading = useLoadingSelector(
    Journeys.thunks.doGetAgencyJourneys,
  );
  const journeys = useSelector(selectCurrentAgencyJourneys);

  useFocusEffect(
    useCallback(() => {
      dispatch(Journeys.thunks.doGetAgencyJourneys(userData._id));
    }, [userData._id]),
  );
  console.log(journeys, 'this is journeys');
  return (
    <View style={styles(lang, isDarkMode).container}>
      <Header isDarkMode={isDarkMode} lang={lang} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginVertical: 20,
          marginHorizontal: 10,
        }}>
        <Text style={styles().title}>{languages[lang].journeys}</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('addJourney');
          }}
          style={styles().add}>
          <Text style={styles().plus}>+</Text>
        </TouchableOpacity>
      </View>
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
