import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { data } from './data';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import Svg from 'atoms/Svg';
import TextView from 'atoms/TextView';
import languages from 'values/languages';
import Switches from './Switches';
import { useSelector } from 'react-redux';
import { selectIsDarkMode } from 'redux/DarkMode';
import COLORS from 'values/colors';
import { selectCurrentUser } from 'redux/user';

const Card = ({
  lang,
  isLanguageModel,
  setisLanguageModel,
  isCurrencyModel,
  setisCurrencyModel,
  isPasswordModel,
  setisPasswordModel,
  openCustomModal,
}: {
  lang: string;
  isLanguageModel: boolean;
  setisLanguageModel: any;
  isCurrencyModel: boolean;
  setisCurrencyModel: any;
  isPasswordModel: boolean;
  setisPasswordModel: any;
  openCustomModal?: any;
}) => {
  const navigation = useNavigation<any>();
  const isDarkMode = useSelector(selectIsDarkMode);
  const currentUser = useSelector(selectCurrentUser);
  return (
    <View style={styles(lang).parentContainer}>
      {data(lang).map((value: any, index) => (
        <View key={index}>
          <TouchableOpacity
            onPress={() => {
              value.show === 'language'
                ? setisLanguageModel(true)
                : value.show === 'currency'
                ? setisCurrencyModel(true)
                : value.show === 'changePassword'
                ? currentUser
                  ? setisPasswordModel(true)
                  : openCustomModal()
                : navigation.navigate('app', { screen: 'contactUs' });
            }}
            style={styles(lang).container}>
            <View style={styles(lang).innerContainer}>
              <Svg
                name={value.iconName}
                size={value.iconName === 'lang' ? 40 : 55}
              />
              <TextView
                title={value.title}
                style={[
                  styles(lang).text,
                  { color: isDarkMode ? COLORS.white : COLORS.black },
                ]}
              />
            </View>
            <Svg name="smallArrow" size={25} style={styles(lang).arrow} />
          </TouchableOpacity>

          {value.title === 'Language' || value.title === 'اللغه' ? (
            <Switches lang={lang} />
          ) : null}
        </View>
      ))}
    </View>
  );
};

export default Card;
