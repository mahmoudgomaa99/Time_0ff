import { View, Text } from 'react-native';
import React from 'react';
import { useAppDispatch } from 'redux/store';
import Language from 'redux/language';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from 'values/colors';

const Profile = () => {
  const dispatch = useAppDispatch();
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text
        style={{ color: COLORS.secondery }}
        onPress={() => {
          dispatch(Language.changeLanguage());
        }}>
        Language
      </Text>
    </SafeAreaView>
  );
};

export default Profile;
