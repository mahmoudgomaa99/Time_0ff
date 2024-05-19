import { Text, TouchableOpacity, View } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import User, { selectCurrentUser } from 'redux/user';
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
import { selectToken } from 'redux/tokens/reducer';
import { unwrapResult } from '@reduxjs/toolkit';

const Home = () => {
  const navigation = useNavigation<any>();
  const isDarkMode = useSelector(selectIsDarkMode);
  const lang = useSelector(selectLanguage);
  const userData = useSelector(selectCurrentUser);
  const token = useSelector(selectToken);

  const dispatch = useAppDispatch();
  const isGetJourneysLoading = useLoadingSelector(
    Journeys.thunks.doGetAgencyJourneys,
  );
  const journeys = useSelector(selectCurrentAgencyJourneys);
  const [page, setpage] = useState(1);
  useFocusEffect(
    useCallback(() => {
      dispatch(Journeys.thunks.doGetAgency(userData?._id))
        .then(unwrapResult)
        .then(res => {
          dispatch(
            Journeys.thunks.doGetAgencyJourneys({
              id: res.data.data.agencyData._id,
              page: page,
            }),
          );
        });
    }, [userData?._id, page]),
  );

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
        <Text style={styles(lang, isDarkMode).title}>
          {languages[lang].activity}
        </Text>
        <TouchableOpacity
          onPress={() => {
            setpage(1);
            navigation.navigate('addJourney');
          }}
          style={styles().add}>
          <Text style={styles().plus}>+</Text>
        </TouchableOpacity>
      </View>
      <Content
        page={page}
        setpage={setpage}
        isDarkMode={isDarkMode}
        lang={lang}
        journeys={journeys}
        isGetJourneysLoading={isGetJourneysLoading}
      />
    </View>
  );
};

export default Home;
