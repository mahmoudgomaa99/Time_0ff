import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { useSelector } from 'react-redux';
import { selectIsDarkMode } from 'redux/DarkMode';
import { selectLanguage } from 'redux/language';
import ImageSection from './Components/ImageSection';
import Contents from './Components/Contents';

const Profile = () => {
  const isDarkMode = useSelector(selectIsDarkMode);
  const lang = useSelector(selectLanguage);
  return (
    <SafeAreaView style={styles(lang, isDarkMode).container}>
      <ImageSection isDarkMode={isDarkMode} lang={lang} />
      <ScrollView>
        <Contents isDarkMode={isDarkMode} lang={lang} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
