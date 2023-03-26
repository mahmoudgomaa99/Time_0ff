import { View, Text } from 'react-native';
import React from 'react';
import { useAppDispatch } from '../../../redux/store';
import Language from 'redux/language';
import { SafeAreaView } from 'react-native-safe-area-context';

const Profile = () => {
  const dispatch = useAppDispatch();
  return (
    <SafeAreaView>
      <Text
        onPress={() => {
          dispatch(Language.changeLanguage());
        }}>
        Language
      </Text>
    </SafeAreaView>
  );
};

export default Profile;
