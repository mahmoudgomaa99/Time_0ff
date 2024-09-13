import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Platform,
  ActivityIndicator,
} from 'react-native';
import React, { useCallback, useState } from 'react';
import { images } from 'src/assets/images';
import TextView from 'atoms/TextView';
import languages from 'values/languages';
import { styles } from './styles';
import { useSelector } from 'react-redux';
import User, { selectCurrentUser } from 'redux/user';
import useLibraryPermission from 'hooks/useLibraryPermission';
import { useAppDispatch } from 'redux/store';
import Toast from 'react-native-toast-message';
import COLORS from 'values/colors';
import { w } from 'values/Dimensions';
import { useLoadingSelector } from 'redux/selectors';
import { useFocusEffect } from '@react-navigation/native';
import { set } from 'lodash';
import { unwrapResult } from '@reduxjs/toolkit';
import Button from 'components/molecules/Button';

const ImageSection = ({
  lang,
  isDarkMode,
  pick,
  source,
}: {
  lang: string;
  isDarkMode: boolean;
  pick: any;
  source: any;
}) => {
  const dispatch = useAppDispatch();
  const isImageLoading = useLoadingSelector(User.thunks.doUpdateImage);
  const user = useSelector(selectCurrentUser);
  return (
    <View style={styles(lang, isDarkMode).container}>
      <View style={styles().img_container}>
        <Image
          source={source?.assets || { uri: user?.image }}
          style={styles().img}
        />
      </View>
      <Button
        type="secondry"
        label={languages[lang].select_image}
        onPress={() => {
          pick();
        }}
        style={{
          marginTop: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      />
    </View>
  );
};

export default ImageSection;
