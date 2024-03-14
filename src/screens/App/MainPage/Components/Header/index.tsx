import { View, Image } from 'react-native';
import React from 'react';
import Svg from 'atoms/Svg';
import { styles } from './styles';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from 'redux/user';

const Header = ({
  lang,
  isDarkMode,
}: {
  lang: string;
  isDarkMode?: boolean;
  isSortModel: boolean;
  setisSortModel: any;
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
              source={
                user.image
                  ? { uri: user.image }
                  : {
                      uri: 'http://159.89.7.75:80/uploads/users/29/29_1681941966186_default.png',
                    }
              }
              style={{
                width: 38,
                height: 38,
                marginHorizontal: 5,
                borderRadius: 20,
              }}
            />
          ) : (
            <Svg name="profile" size={40} />
          )}
        </View>
      </View>
    </View>
  );
};

export default Header;
