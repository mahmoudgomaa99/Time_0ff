import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Platform,
  ActivityIndicator,
} from 'react-native';
import React, { useCallback } from 'react';
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

const ImageSection = ({
  lang,
  isDarkMode,
}: {
  lang: string;
  isDarkMode: boolean;
}) => {
  const dispatch = useAppDispatch();
  const { source, pick } = useLibraryPermission();
  const isImageLoading = useLoadingSelector(User.thunks.doUpdateImage);
  const user = useSelector(selectCurrentUser);
  console.log(user ,'this is user')
  return (
    <View style={styles(lang,isDarkMode).container}>
      <TouchableOpacity
        onPress={async () => {
          pick();
        }}
        style={styles().img_container}>
        <Image
          source={source?.assets || { uri: user?.image }}
          style={styles().img}
        />
      </TouchableOpacity>
      <TouchableOpacity
        disabled={!source}
        onPress={() => {
          const body = new FormData();
          body.append('image', {
            uri:
              Platform.OS === 'android'
                ? source.assets[0].uri
                : source.assets[0].uri.replace('file://', ''),
            name: source?.assets[0].fileName,
            type: source?.assets[0].type,
          });
          dispatch(User.thunks.doUpdateImage(body)).then(res => {
            console.log('res', res);
            Toast.show({
              type: 'success',
              text2: languages[lang].imageUpdatedSuccefuly,
            });
          });
        }}
        style={{
          alignItems: 'center',
          backgroundColor: source ? COLORS.primary : COLORS.grey,
          width: w * 0.3,
          height: w * 0.1,
          borderRadius: w * 0.2,
          alignSelf: 'center',
          marginVertical: 10,
        }}>
        {isImageLoading ? (
          <View style={{ marginTop: 8 }}>
            <ActivityIndicator size="small" color={COLORS.white} />
          </View>
        ) : (
          <TextView
            style={[styles(lang, isDarkMode).text, { color: COLORS.white }]}
            title={
              source ? languages[lang].edit_image : languages[lang].select_image
            }
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default ImageSection;