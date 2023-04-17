import { View, Text } from 'react-native';
import React from 'react';
import TextView from 'atoms/TextView';
import languages from 'values/languages';
import Svg from 'atoms/Svg';
import { styles } from './styles';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from 'redux/user';
import { log } from 'react-native-reanimated';

const Header = ({
  lang,
  isDarkMode,
}: {
  lang: string;
  isDarkMode?: boolean;
}) => {
  const user = useSelector(selectCurrentUser);
  return (
    <View
      style={[
        styles().Top,
        { flexDirection: lang === 'ar' ? 'row-reverse' : 'row' },
      ]}>
      <View style={styles(isDarkMode).welcome}>
        <View
          style={[
            styles().welcomeBack,
            { flexDirection: lang === 'ar' ? 'row-reverse' : 'row' },
          ]}>
          <Svg name="profile" size={50} />
          <TextView
            title={languages[lang].welcomeBackHome}
            style={styles(isDarkMode).welcomeText}
          />
          <Svg name="smile" size={42} />
        </View>
        <TextView
          title={user ? user.name : 'User'}
          style={styles(isDarkMode).nameText}
        />
      </View>
    </View>
  );
};

export default Header;
