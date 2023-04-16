import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { useAppDispatch } from '../../../redux/store';
import Language, { selectLanguage } from 'redux/language';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import { useSelector } from 'react-redux';
import Top from './Components/Top';
import ImageSection from './Components/ImageSection';
import Contents from './Components/Contents';
import COLORS from 'values/colors';

const Profile = () => {
  const dispatch = useAppDispatch();
  const lang = useSelector(selectLanguage);

  return (
    <SafeAreaView style={styles(lang).container}>
      <Top lang={lang} />
      <ImageSection lang={lang} />
      <ScrollView>
        <Contents lang={lang} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
