import { View, Text } from 'react-native';
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
    <View style={styles(lang).container}>
      <Top lang={lang} />
      <ImageSection lang={lang} />
      <Contents lang={lang} />
      <Text
        style={{
          fontSize: 20,
          margin: 10,
          color: COLORS.secondery,
          textDecorationLine: 'underline',
        }}
        onPress={() => {
          dispatch(Language.changeLanguage());
        }}>
        Demo Change Language
      </Text>
    </View>
  );
};

export default Profile;
