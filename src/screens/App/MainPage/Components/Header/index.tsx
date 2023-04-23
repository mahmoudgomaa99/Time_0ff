import { View, Text, Image } from 'react-native';
import React from 'react';
import TextView from 'atoms/TextView';
import languages from 'values/languages';
import Svg from 'atoms/Svg';
import { styles } from './styles';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from 'redux/user';
import { log } from 'react-native-reanimated';
import { h, w } from 'values/Dimensions';

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
          {user ? (
            <Image
              source={{ uri: user.image }}
              style={{ width: w * 0.1, height: h * 0.04 }}
            />
          ) : (
            <Svg name="profile" size={50} />
          )}

          <TextView
            onPress={async () => {
              // try {
              //   const response = await fetch(
              //     'http://159.89.7.75/api/journeys/12',
              //   );
              //   console.log(response.json());
              //   return response;
              // } catch (err) {
              //   console.log(err);
              // }
              // await fetch('http://159.89.7.75/api/journeys/12').then(data => {
              //   // return data.json();
              //   console.log(data.json());
              // });
            }}
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
