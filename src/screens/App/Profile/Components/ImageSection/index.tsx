import { View, Text, Image } from 'react-native';
import React from 'react';
import { images } from 'src/assets/images';
import TextView from 'atoms/TextView';
import languages from 'values/languages';
import { styles } from './styles';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from 'redux/user';

const ImageSection = ({
  lang,
  isDarkMode,
}: {
  lang: string;
  isDarkMode: boolean;
}) => {
  const user = useSelector(selectCurrentUser);
  return (
    <View style={styles(lang).container}>
      <Image source={images.present} style={styles(lang).image} />
      <TextView title={user ? user.name : 'User'} style={styles(lang,isDarkMode).text} />
    </View>
  );
};

export default ImageSection;
