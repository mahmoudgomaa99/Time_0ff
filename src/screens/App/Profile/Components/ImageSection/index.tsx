import { View, Text, Image } from 'react-native';
import React from 'react';
import { images } from 'src/assets/images';
import TextView from 'atoms/TextView';
import languages from 'values/languages';
import { styles } from './styles';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from 'redux/user';
import { TUser } from 'redux/user/model';

const ImageSection = ({
  lang,
  isDarkMode,
  user,
}: {
  lang: string;
  isDarkMode: boolean;
  user: any;
}) => {
  return (
    <View style={styles(lang).container}>
      <Image
        source={user ? { uri: user?.imageUrl || user?.image } : images.present}
        style={styles(lang).image}
      />
      <TextView
        title={user ? user.name : 'User'}
        style={styles(lang, isDarkMode).text}
      />
    </View>
  );
};

export default ImageSection;
