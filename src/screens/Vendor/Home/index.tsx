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
      dispatch(
        Journeys.thunks.doGetAgencyJourneys({ id: userData?._id, page: page }),
      );
    }, [userData?._id, page]),
  );
  // useFocusEffect(
  //   useCallback(() => {
  //     dispatch(User.thunks.doGetUser({}));
  //   }, []),
  // );

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
          {languages[lang].journeys}
        </Text>
        <TouchableOpacity
          onPress={() => {
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
