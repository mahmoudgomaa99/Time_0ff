import { View, Text } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../../../../../redux/language/index';
import TextView from 'atoms/TextView';
import languages from 'values/languages';
import Svg from 'atoms/Svg';
import { styles } from './styles';

const Header = () => {
  const lang = useSelector(selectLanguage);
  return (
    <View
      style={[
        styles.Top,
        { flexDirection: lang === 'ar' ? 'row-reverse' : 'row' },
      ]}>
      <View style={styles.welcome}>
        <View
          style={[
            styles.welcomeBack,
            { flexDirection: lang === 'ar' ? 'row-reverse' : 'row' },
          ]}>
          <Svg name="profile" size={50} />
          <TextView
            title={languages[lang].welcomeBackHome}
            style={styles.welcomeText}
          />
          <Svg name="smile" size={42} />
        </View>
        <TextView title={languages[lang].user} style={styles.nameText} />
      </View>
    </View>
  );
};

export default Header;
