import { ScrollView } from 'react-native';
import React, { useCallback } from 'react';
import { useAppDispatch } from '../../../redux/store';
import { selectLanguage } from 'redux/language';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import { useSelector } from 'react-redux';
import Top from './Components/Top';
import ImageSection from './Components/ImageSection';
import Contents from './Components/Contents';
import { selectIsDarkMode } from 'redux/DarkMode';
import User, { selectCurrentUser } from 'redux/user';
import { useFocusEffect } from '@react-navigation/native';

const Profile = () => {
  const dispatch = useAppDispatch();
  const currnetUser = useSelector(selectCurrentUser);
  const isDarkMode = useSelector(selectIsDarkMode);
  const lang = useSelector(selectLanguage);

  useFocusEffect(
    useCallback(() => {
      dispatch(User.thunks.doGetUser({}));
    }, []),
  );
  return (
    <SafeAreaView style={styles(lang, isDarkMode).container}>
      <Top isDarkMode={isDarkMode} lang={lang} />
      <ImageSection user={currnetUser} isDarkMode={isDarkMode} lang={lang} />
      <ScrollView>
        <Contents
          currentUser={currnetUser}
          isDarkMode={isDarkMode}
          lang={lang}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
