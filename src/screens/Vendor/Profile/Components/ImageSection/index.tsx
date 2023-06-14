import { View, Image } from 'react-native';
import React from 'react';
import languages from 'values/languages';
import { styles } from './styles';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from 'redux/user';
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
