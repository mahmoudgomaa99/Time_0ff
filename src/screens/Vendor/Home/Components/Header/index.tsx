import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import TextView from 'atoms/TextView';
import languages from 'values/languages';
import Svg from 'atoms/Svg';
import { styles } from './styles';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from 'redux/user';
import { h, w } from 'values/Dimensions';
import { useNavigation } from '@react-navigation/native';

const Header = ({
  lang,
  isDarkMode,
}: {
  lang: string;
  isDarkMode?: boolean;
}) => {
  const navigation = useNavigation<any>();
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
          {user ? (
            <Image
              source={
                user.image
                  ? { uri: user.image }
                  : {
                      uri: 'http://159.89.7.75:80/uploads/users/29/29_1681941966186_default.png',
                    }
              }
              style={{
                width: w * 0.08,
                height: h * 0.04,
                marginHorizontal: 5,
                borderRadius: 10,
              }}
            />
          ) : (
            <Svg name="profile" size={50} />
          )}

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
