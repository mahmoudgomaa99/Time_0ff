import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import { images } from 'src/assets/images';
import TextView from 'atoms/TextView';
import languages from 'values/languages';
import { styles } from './styles';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from 'redux/user';
import { TUser } from 'redux/user/model';
import Svg from 'atoms/Svg';

const ImageSection = ({
  lang,
  isDarkMode,
  user,
  openActionSheet,
  isLoading,
}: {
  lang: string;
  isDarkMode: boolean;
  user: any;
  openActionSheet?: any;
  isLoading?: any;
}) => {
  if (isLoading)
    return (
      <View style={styles(lang).container}>
        <ActivityIndicator size="large" color="#07276c" />
      </View>
    );

  console.log('user', user);

  return (
    <View style={styles(lang).container}>
      <TouchableOpacity onPress={openActionSheet}>
        <Image
          defaultSource={images.test}
          source={
            user?.imageUrl || user?.image
              ? { uri: user?.imageUrl || user?.image }
              : images.test
          }
          style={styles(lang).image}
        />
        <Svg name="camera" size={40} style={styles(lang).camera} />
      </TouchableOpacity>

      <TextView
        title={user ? user.name : 'User'}
        style={styles(lang, isDarkMode).text}
      />
    </View>
  );
};

export default ImageSection;
